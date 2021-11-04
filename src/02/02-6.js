//기존 자바스크립트의 객체 확장 표현식 사용 방법
//기존 자바스크립트에서는 객체와 객체의 값을 선언하기 위해 키 이름과 값을 각각 할당해야 한다.

/*
var x = 0;
var y = 0;
var obj = { x: x, y: y};//obj에 대입한 객체를 보면 키 이름이 키값과 동일(각각 x,y)하다.
var randomKeyString = 'other';
var combined = {};
combined['one'+randomKeyString] = 'some value';//연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성해야 한다.
var obj2 = {
    x: x,
    methodA: function() { console.log('method A'); },
    methodB: function() { return 0; },
};//객체에 함수를 추가할 때는 변수에 함수를 할당한다.
*/

//ES6의 객체 확장 표현식 사용 방법
//ES6에서는 위 코드 에서의 불편함을 아래와 같이 개선했다. 코드는 아래와 같다.
/*
var x = 0;
var y = 0;
var obj = {x,y};//객체의 변수를 선언할 때 키 값을 생략하면 자동으로 키의 이름으로 키값을 지정한다.
var randomKeyString = 'other';
var combined = {
    ['one'+randomKeyString]: 'some value',
};//객체 생성 블록 안에 대괄호([])를 사용하여 표현식을 작성하면 추가하여 계산된 키값을 생성할 수 있다.

var obj2 = {
    x,
    methodA() { console.log('method A'); },
    methodB() { return 0; },
};//function 키워드를 생략하여 함수를 선언할 수 있다.
*/

//기존 자바스크립트의 구조 분해 사용 방법
/*
var list = [0,1];
var item1 = list[0];//배열의 인덱스를 사용하여 변수에 할당한다.
var item2 = list[1];
var item3 = list[2] || -1;// || 연산자를 이용하여 배열의 해당 인덱스에 값이 없으면 기본값으로 할당한다.
var temp = item2;//배열의 두 값을 치환한다.
item2 = item1;
item1 = temp;
var obj = {
    key1:'one',
    key2:'two',
} ;
var key1 = obj.key1;//객체의 키값을 변수에 할당
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';// || 연산자를 이용하여 객체의 해당 키값이 없으면 기본값으로 할당한다.

var newKey1= obj.key1;//객체의 키값을 다른 변수에 할당한다.
*/

//ES6의 구조 분해와 구조 할당 사용 방법
//위의 코드를 ES6에서는 아래와 같은 코드로 나타낼 수 있다.
var list= [0,1];
var [
    item1,//대괄호 블록 사이에 추출하고자 하는 값의 인덱스 위치에 변수를 배치한다.
    item2,
    item3 = -1,//선언 부호(=)를 변수와 함께 사용하여 기본값을 할당한다.
] = list;
[item2, item1] = [item1, item2];//인덱스 위치에 각각 변경할 변수를 교차 배치하여 배열의 두 값을 치환한다.

var obj = {
    key1: 'one',
    key2: 'two',
};

var {
    key1: newKey1,//콜론(:) 부호와 함께 새 변수명을 선언하여 추출된 키값을 다른 변수명으로 할당한다.
    key2,//객체의 키값을 변수에 할당한다.
    key3 = 'default key3 value',//선언 부호(=)를 변수와 함께 사용하여 기본값을 할당한다.
} = obj;

//구조 할당은 전개 연산자를 사용한다. ES6의 구조 분해와 구조 할당은 함수 인잣값을 다루거나 JSON 데이터를 변환할 때 유용하게 사용되낟.

var [item1, ...otherItems] = [0,1,2];//구조 할당 표현식을 이용하여 배열에서 첫 위치의 인덱스값 item1을 추출하고 나머지 값을 전개 연산자로 otherItems에 할당한다.
var {key1, ...others} = { key1: 'one', key2:'two'};//객체의 key1 키값을 추출하고 나머지 키값을 포함한 새 객체를 others에 할당한다.
//otherItems = [1,2]
//others = { key2: 'two' }