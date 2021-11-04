//기존 자바스크립트의 비동기 함수 처리 방법 알아보기

/*
function work1(onDone){
    setTimeout(() => onDone('작업1 완료!'),100);//100ms의 지연 작업을 하는 work1() 함수 선언, 지연 작업 완료 후에는 onDone() 함수가 실행된다.
}

function work2(onDone){
    setTimeout(() => onDone('작업2 완료!'),200);//200ms의 지연 작업을 하는 work2() 함수 선언, 지연 작업 완료 후에는 onDone() 함수가 실행된다.
}

function work3(onDone){
    setTimeout(() => onDone('작업3 완료!'),300);//300ms의 지연 작업을 하는 work3() 함수 선언, 지연 작업 완료 후에는 onDone() 함수가 실행된다.
}

function urgentWork(){
    console.log('긴급 작업');
}


//실제 비동기 함수를 사용하는 예
work1(function (msg1){//지연 작업 함수 실행
    console.log('done after 100ms: ' + msg1);
    work2(function (msg2){
        console.log('done after 200ms: ' + msg2);
        work3(function(msg3){
            console.log('done after 600ms:' + msg3);
        });
    });
});

urgentWork();//지연 작업 완료 시간을 기다리지 않고 바로 실행되는 함수
*/
//ES6의 비동기 함수 처리 방법
const work1 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업1 완료'),100);
    });

const work2 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업2 완료'),200);
    });

const work3 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업3 완료'),300);
    });

function urgentWork(){
    console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms: ' + msg1);
    return work2();
};

work1()
    .then(nextWorkOnDone)
    .then((msg2) => {
        console.log('done after 200ms: ' + msg2);
        return work3();
    })
    .then((msg3) => {
        console.log('done after 600ms: ' + msg3);
    });
urgentWork();

const workland2 = () => work1().then((msg1) => {
    console.log('done after 100ms: ' + msg1);
    return work2();
});

work1and2().then((msg2) => {
    console.log('done after 200ms: ' + msg2);
    return work3();
}).then((msg3) => {
    console.log('done after 600ms: ' + msg3);
});