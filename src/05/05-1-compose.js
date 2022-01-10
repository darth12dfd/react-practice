//05-1 커링과 조합 개념 공부하기

//04. 함수 조합 기법 알아보기

//04-1. compose() 함수 만들어보기
const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => multiply(a, 2);
const addX = x => a => add(x, a);
const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

//const formulaWithoutCompose = addX(4)(multiplyX(3)(multiplyX(2)));

[multiplyTwo, multiplyThree, addFour].reduce(
    function(prevFunc,nextFunc){
        return function(value){
            return nextFunc(prevFunc(value));
        }
    },
    function(k) { return k; }
);

//단계별로 분석하기

//1단계: 초깃값과 multiplyTwo() 함수의 조합

//prevFunc는 function(k){ return k; }이고, nextFunc는 multiplyTwo이다. 첫 조합 연산 결과로 다음 함수를 얻게 된다.

/*
function(value){
    return multiplyTwo((k => k)(value));
}
*/

//2단계: 1단계 결괏값과 multiplyThree() 함수의 조합

//prevFunc는 1단계에서 얻은 함수이고 nextFunc는 multiplyThree이다. 두 번째 조합 연산 결과로 아래의 함수를 얻게 된다.

/*
    function(value){
        return multiplyThree(
            function(value){
                return multiplyTwo(
                    (k => k)(value)
                );
            }(value)
        );
    }
*/

//3단계: 2단계의 결괏값과 addFour()함수의 조합

//prevFunc는 2단계에서 얻은 함수이고, nextFunc는 addFour이다. 세 번째 조합 연산 결과 아래의 함수를 얻게 된다.

/*
    function(value){
        return addFour(
            function(value){
                return multiplyThree(
                    function(value){
                        return multiplyTwo(
                            (k => k)(value)
                        );
                    }(value)
                );
            }(value)
        );
    }
*/

//최종 변환된 함수의 구조가 조금 복잡하지만 함수를 실행해 보면 ((x * 2) * 3) + 4를 바르게 계산했다는 것을 알 수 있다.
//이제 배열 안에 저장된 함수만 조합하는 코드를 임의의 함수로 조합할 수 있도록 바꾼다. 아래와 같이 reduce()를 반환하는 함수를 정의하고 함수의 인자로 조합할 함수의 배열을 전달하면 된다.

function compose(funcArr){
    return funcArr.reduce(
        function (prevFunc,nextFunc){
            return function(value){
                return nextFunc(prevFunc(value));
            }
        },
        function(k) { return k; }
    );
}

//const formulaWithCompose = compose([multiplyTwo,multiplyThree,addFour]);

//실무에서 사용하는 함수 조합 기법 알아보기

//1. arguements를 사용하여 배열 인자 대신 나열형 인자로 함수 구조를 유연하게 만들기

function __compose(){
    const funcArr = Array.prototype.slice.call(arguments);//Array의 prototype 객체 안에 정의된 slice() 함수를 사용하여 나열형 자료를 배열로 변환한다. 자바 스크립트의 트릭으로 실무에서는 arguments를 배열로 변환할 때 자주 사용되는 패턴이다.
    return funcArr.reduce(
        function(prevFunc, nextFunc){
            return function(value){
                return nextFunc(prevFunc(value));
            }
        },
        function(k) { return k; }
    );
}

//const formulaWithCompose = compose(multiplyTwo,multiplyThree,addFour);//함수 배열값을 전달하지 않고 인자 항목을 원하는 만큼 전달해 조합하여 사용한다.

//2. arguments를 활용하여 하나의 실행 인자 value를 다중 인자로 사용 가능하게 확장하기

/*
    위 예제의 compose() 함수가 받아들이는 함수 목록들의 함수는 모두 인자를 1개만 받는다.
    만약 여러 인자를 처리하는 함수를 compose()함수가 조합해야 하면 어떻게 코드를 변경해야 할까? 앞에서 사용한 arguments 변수와 nextFunc의 인자로 apply() 함수를 이용하면 인자를 여러 개 받아 처리하는 함수도 조합할 수 있다.
*/

function _composeWithArgs() {
    const funcs = Array.prototype.slice.call(arguments);
    return funcs.reduce(
      function (prevFunc, nextFunc) {
        return function() {
          const args = Array.prototype.slice.call(arguments);
          return nextFunc(prevFunc.call(this, args));
        }
      },
      function(k) {
        return k;
      },
    );
  }

  //apply() 함수는 인자에 전달된 배열을 전달받아 나열형 인자로 실행되도록 돕는다.

  //3. 전개 연산자로 더 간결하게 만들기

  /* 
    function compose(...funcs) {
        return funcs.reduce(
            (prevFunc, nextFunc) 
                => (...args) => nextFunc(prevFunc(...args)),
        k => k
        );
    }
  */

//4. 함수 조합 실행하기

const formulaWithCompose = compose(multiplyTwo,multiplyThree,addFour);
//혹은

const formulaWithCompose = compose(
    multiplyTwo,
    multiplyThree,
    addFour,
);

const x = 10;

formulaWithCompose(10);//앞의 공식 함수 formula와 동일한 64값이 반환된다.

//5. 아래와 같은 방식으로 원래 커링함수를 조합하여 사용할 수 있게 되었다. 다양한 연산 함수를 이와 같은 조합 방식으로 다양하게 구현할 수 있다.

const formulaWithCompose = compose(
    multiplyX(2),
    multiplyX(3),
    addX(4)
);

//조합 함수 없이 표현하는 경우
const formulaWithoutCompose = addX(4)(multiplyX(3)(multiplyX(2)));

//(((x * 2) + 5) * 3) + 4 연산이 추가된 공식
const formulaWithCompose2 = compose(
    multiplyX(2),
    addX(5),
    multiplyX(3),
    addX(4)
);

//조합함수 없이 표현한 경우
const formulaWithouCompose2 = addX(4)(multiplyX(3)(addX(5)(multiplyX(2))));
