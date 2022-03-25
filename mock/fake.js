//10-3. 서버 지연 처리와 오류 표시하기

///10-3-2. 오류 발생 알려주기

/*
    오류가 발생했음을 알려주는 화면을 출력해본다.
*/

///10-3-2-2. json-server 코드 추가하기

/*
    먼저 json-server를 개발자 버전으로 설치한다. 그 후, json-server에 코드를 추가로 구현한다. 일단 모든 요청에 500 오류를 errorMessage와 함께 응답하도록 만들었다.
*/

const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const port = 4000;

server.use(middlewares);
server.use((req,res) => {
    res.status(500).jsonp({
        errorMessage: '문제가 발생했습니다.',
    });
});

server.listen(port);//4000번 포트로 작성된 가상 데이터 서버를 구동한다.