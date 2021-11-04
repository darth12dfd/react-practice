//스로틀
//스로틀은 디바운스 개념과 비슷하지만 '입력되는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행한다'는 점에서 다르다.
//예를 들어 페이스북의 타임라인은 스크롤을 내리는 동안 계속해서 다음 내용이 출력되는 일명 '무한 스크롤'기능이 구현되어 있다. 만약 이 기능이 디바운스로 구현되어 있다면 '스크롤링'이 멈추지 않는 한 '다음 타임라인 로딩'은 진행되지 않는다.
//실제로 지연시간 동안 스크롤이 움직이면 여러 번의 서버 요청이 발생한다. 디바운스와 다르게 스로틀은 첫 번째 요청이 지연 실행되는 동안에는 중복된 요청을 무시하고 이후에 첫 번째로 호출되는 요청을 동일하게 지연 실행하여 구간 내에서는 중복 요청 과정을 생략한다.
//코드는 아래와 같다.

function throttle(func,delay){
    let lastFunc;
    let lastRan;

    return function(...args){
        const context = this;
        if(!lastRan){
            func.call(context, ...args);
            lastRan = Date.now();
        } else{
            if(lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if((Date.now() - lastRan) >= delay){
                    func.call(context, ...args);
                    lastRan = Date.now();
                }
            },delay - (Date.now() - lastRan));
        }
    }
}

var checkPosition = () => {
    const offset = 500;
    const currentScrollPosition = window.pageYOffset;   
    const pageBotttomPosition = document.body.offsetHeight - window.innerHeight - offset;
    if(currentScrollPosition >= pageBotttomPosition){
        //fetch('/page/next');
        console.log('다음 페이지 로딩');
    }
};

var infiniteScroll = throttle(checkPosition,300);
window.addEventListener('scroll',infiniteScroll);

//func는 스크롤이 이동할 때 호출되는 '서버 요청'이고 delay는 '호출 생략 시간'이다.
//코드를 보면 func() 함수가 처음 실행(!lastRan)될 때 '함수를 즉시 실행하고, 실행 시간(lastRan)을 저장한다'는 점이 다르다.
//이후(lastRan) 함수를 실행하는 요청이 오면 setTimeout() 함수를 실행하지만 지연 시간을 계산(Date.now() - lastRan)하고 이 값이 delay보다 커야만 func() 함수를 실행시킨다.
//예제로 작성된 함수를 실행하고 브라우저의 스크롤을 내리면 스크롤이 움직이는 동안(scroll) console.log() 함수가 주기적으로 (매 300ms 동안) 실행되어 '다음 페이지 로딩'이라는 문장이 콘솔에 출력되는 것을 확인할 수 있다.