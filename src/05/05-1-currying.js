//05-1 커링과 조합 개념 공부하기

//1. 커링 개념 알아보기

function multiply(a,b){
    return a*b;
}

//위의 함수는 두 인자를 곱하여 반환한다. 이 함수를 재활용하려면 아래와 같은 함수를 만들 수 있다.

function multiplyTwo(a){
    return multiply(a,2);
}

//이를 응용해 n배 함수를 생성해주는 커링 함수를 만들 수 있다.

//다음은 커링 함수 multiplyX를 구현한 예입니다.

/*
function multiply(x){
    return function(a){
        return multiply(a,x);
    }
}
*/

//위의 코드는 화살표 함수로 다음과 같이 표현해도 된다. 

const multiplyX = x => a => multiply(a,x);

//위 함수는 인자 x를 받아 이름없는 함수를 반환하고, 이름 없는 함수는 다시 인자 a를 받아 multiply(a,x)를 실행한 값을 반환한다.

//코드를 보면 인자를 나눠받아 함수를 실행하는 구성이다. 커링 함수는 아래와 같이 사용한다.

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

//또한 중간에 있던 함수 선언을 생략하여 결과값을 얻을 수도 있다.

//multiplyX(3)(3)은 multiplyX(3)으로 반환받은 함수 function(a)의 인자에 바로 3을 전달하여 실행한 결괏값으로 9를 얻는다.

const result1 = multiplyX(3)(3);//9
const result2 = multiplyX(3)(4);//12

//02. 커링 한 번 더 사용해 보기

//입력된 x에 a,b를 순서대로 곱한 다음 c를 더하는 (((x * a) * b)+ c)라는 수학식을 커링으로 구현해본다.

const equation = (a,b,c,) => x => ((x * a) * b) + c;
const formula = equation(2,3,4);
const x = 10;
const result = formula(x);

//equation() 함수는 커링을 사용하여 a,b,c에 해당하는 값을 인자로 받아 x => ((x * a) * b) + c 라는 함수를 반환한다.
//이와 같이 인자를 나중에 받아 실행할 함수를 생성해주는 equation()과 같은 함수를 '커링 함수'라고 부른다.

//03. 커링 함수 응용하기
const multiply = (a,b) => a*b;
const add = (a,b) => a+b;

const multiplyX = x => a => multiply(a,x);
const addX = x => a => add(a,x);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = x => addFour(multiplyThree(multiplyTwo(x)));