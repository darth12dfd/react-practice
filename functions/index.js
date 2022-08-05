const functions = require('firebase-functions');
const next = require('next');
const apiserver = require('./apiserver');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

exports.apiserver = functions.https.onRequest(apiserver);

exports.next = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
