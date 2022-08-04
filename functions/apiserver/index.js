//13-5. 파이어베이스 DB 연결하기

import { config } from 'firebase-functions';
import { initializeApp, firestore } from 'firebase-admin';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import moment from 'moment';

initializeApp(config().firebase);

const db = firestore();
const app = express();
const main = express();

main.use('/api', app);
main.use(json());
main.use(urlencoded({ extended: false }));

app.post('/transactions', (req, res) => {
  const currentPrice = parseInt(req.body.currentPrice.replace(/[^0-9]+/g, ''));
  const amount = req.body.amount;

  const data = {
    ...req.body,
    currentPrice,
    totalPrice: currentPrice * amount,
    datetime: firestore.FieldValue.serverTimestamp(),
  };

  db.collection('transactions')
    .add(data)
    .then((doc) => {
      db.collection('transactions')
        .doc(doc.id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            res.status(200).send(doc.data());
          } else {
            res.status(404).send({
              errorCode: 404,
              errorMessage: '자료가 존재하지 않습니다',
            });
          }
        });
    });
});

app.get('/transactions/:id', (req, res) => {
  db.collection('transactions')
    .doc(req.params.id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        res.status(200).send(doc.data());
      } else {
        res.status(404).send({
          errorCode: 404,
          errorMessage: '자료가 존재하지 않습니다',
        });
      }
    });
});

app.get('/transactions', (req, res) => {
  const { code, currentPrice_gte, currentPrice_lte, _page, _limit } = [
    'code',
    'currentPrice_gte',
    'currentPrice_lte',
    '_page',
    '_limit',
  ].reduce(
    (qs, name) => ({
      ...qs,
      [name]: name === 'code' ? req.query[name] : parseInt(req.query[name]),
    }),
    {},
  );
  const page = _page || 1;
  let collection = db.collection('transactions');
  if (code) {
    collection = collection.where('code', '==', code);
  }
  if (currentPrice_gte) {
    collection = collection.where('currentPrice', '>=', currentPrice_gte);
  }
  if (currentPrice_lte) {
    collection = collection.where('currentPrice', '<=', currentPrice_lte);
  }
  if (currentPrice_gte) {
    collection = collection.orderBy('currentPrice', 'desc');
  } else if (currentPrice_lte) {
    collection = collection.orderBy('currentPrice', 'asc');
  }

  collection = collection.orderBy('datetime', 'desc');

  if (_limit) {
    collection = collection.limit(_limit * page);
  }
  collection.get().then((snapshot) => {
    let data = [];
    snapshot.forEach((doc) => {
      const { datetime, ...result } = doc.data();
      const formattedDatetime = moment(datetime.toMillis()).format();
      data.push(
        Object.assign(result, {
          id: doc.id,
          datetime: formattedDatetime,
        }),
      );
    });
    res.status(200).send(data.slice(_limit * (page - 1)));
  });
});
export default main;
