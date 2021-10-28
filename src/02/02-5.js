//화살표 함수는 ES6에 추가된 표현식을 사용하는 함수로 화살표 기호 =>로 함수를 선언한다. 화살표 기둥 = 을 사용하므로 fat arrow function 이라고 부른다. 

//기존 자바스크립트의 함수 사용 방법 알아보기

function add(first, second){
    return first + second;
}

//typeof add === 'function'
var add = function(first, second){
    return first + second;
};
//typeof add === 'function

//typeof로 add와 'fucntion'이라는 문자열을 비교해보면 true가 나온다.
//허나 첫 번째 방식은 함수 이름이 있고 두 번째 방식은 함수 이름이 없는 익명 함수이다.

//ES6의 화살표 함수 사용 방법 알아보기
//화살표 함수는 익명함수를 선언하여 변수에 대입하는 바법과 유사하다.
// 하나 다른 점은 function 키워드를 생략하고 인자 블록 () 과 본문 블록 {} 사이에 =>를 표기한다는 것이다. 화살표 함수를 사용하여 함수 표현식을 바꿔본다.

var add = (first, second) => {
    return first + second;
};//앞에서 본 기존의 함수 표현식을 화살표 함수로 변경한다.

var add = (first, second) => first + second; //본문 블록이 비어 있고 결괏값을 바로 반환하는 경우에는 중괄호를 생략하고 => 뒤에 반환 표현식을 넣을 수 있다.
var addAndMultiple = (first,second) => ({add: first + second , multiply: first * second });//반환값이 객체라면 괄호로 결괏값을 감싸 간결하게 표현할 수 있다.

//이후 배우게 될 커링과 같은 디자인 패턴에서 사용되는 함수를 반환할 때 '계단형 함수 선언'과 같은 구조가 만들어지지 않게 해준다는 장점이 있다.

function addNumber(num){
    return function (value){
        return num + value;
    };
}//함수 표현식 반환

var addNumber = num => value => num + value;//화살표 함수를 사용하여 간결한 코드로 함수를 반환할 수 있다.

//또한 화살표 함수는 콜백 함수의 this 범위로 생기는 오류를 피하기 위해 bind()< 함수를 사용하여 this 객체를 전달하는 과정을 포함하고 있다.

class Myclass {
    value = 10;
    constructor(){
        var addThis2 = function(first, second){
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
    }
}

