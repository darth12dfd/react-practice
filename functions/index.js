//13-4. next.js 서버로 구동되는 서비스 배포하기

//13-4-10. next.js function 구동 코드 추가하기

const functions = require('firebase-functions');
const next = require('next');

var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev, conf: { distDir: 'next' } });
var handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
    return app.prepare().then(() => handle(req,res));
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
