//ES6의 객체 전개 연산자 사용 방법 알아보기

//ES6 이전에는 객체의 키나 값을 추출할 때 객체 내장 함수를 사용했다.
/*
var objectOne = { one: 1, two: 2, other : 0};
var objectTwo = { three: 3, four: 4, other: -1};
var combined = {
    one: objectOne.one,//키에 해당하는 값을 추출한다.
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,
};
var combined = Object.assign({},objectOne,objectTwo);//객체 내장 함수 assign()을 사용하여 두 객체를 병합한다.
//combined = { one: 1, two: 2, three: 3, four: 4, other : -1}
var combined = Object.assign({},objectTwo,objectOne);//중복되는 키값이 있으면 이후에 전달된 객체 objectOne의 값으로 덮어쓴다.
//combined = { one: 1, two: 2, three: 3 ,four: 4, other : 0}
var others = Object.assign({},combined);
delete others.other;//삭제 연산자를 사용하여 특정 데이터를 추출한 다음 새로운 객체를 만든다.
//others = { one:1, two:2,three:3,four:4}
*/

//위의 코드를 ES6의 전개 연산자를 사용하면 간결하게 바꿀 수 있다.
//두 객체를 병합할 때 중복되 키 값들은 마지막에 사용한 객체의 값으로 덮어쓴다.
var objectOne = { one: 1, two: 2, other : 0};
var objectTwo = { three: 3, four: 4, other: -1};
var combined = {
    ...objectOne,
    ...objectTwo,
};
//combined = { one: 1, two: 2, three: 3, four:4, other: -1}
var combined = {
    ...objectTwo,
    ...objectOne,
}
//combined = { one: 1, two: 2, three: 3 ,four: 4, other : 0}

var { other, ...others } = combined;//객체에서 특정한 값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개 연산자로 선언된 변수(others)에 할당할 수 있다.
//others = {one: 1, two: 2, three: 3, four: 4}