//ES6의 가변 변수 사용법
//가변 변순느 let 키워드로 선언한다.
let num = 1;
num = num * 3;

let str = '문자';
str = '다른 문자';

let arr = [];
arr = [1,2,3];

let obj = {};
obj = { name: '새 객체' };

//ES6의 불변 변수 사용법
//불변 변수는 const 키워드로 선언한다. const로 선언한 변수는 읽기만 가능하다.
//이때 불변 변수는 값을 다시 할당할 수 없는 것이지 값 자체를 변경할 수는 있다.

//아래는 재할당하는 경우의 코드(오류 발생)
/*
    const num = 1;
    num 3;
    const str = '문자';
    str = '새 문자';
    const arr = [];
    arr = [1, 2, 3];
    const obj = {};
    obj = { name: '새 객체' };
*/

//아래는 자바스크립트 내장 함수를 사용해서 값을 변경하는 코드이다.
const arr2 = [];
arr2.push(1); //arr2 = [1]
arr2.splice(0,0,0);//arr2 = [0,1]
arr2.pop();//arr2 = [1]
const obj2 = {};
obj2['name'] = '내 이름';//obj2 = { name: '내 이름' }
Object.assign(obj2,{ name: '새 이름' });//obj2 = { name: '새 이름'}
delete obj2.name; //obj2 = {}

//위와 같은 방식으로 불변 변수의 값을 수정할 수 있으나 이런 경우 무결성 제약 조건에 위배된다
//그렇기에 무결성을 유지하면서 불변 변수의 값을 수정해야 하는 경우 수정할 불변 변수를 새로 만들어 새값을 할당하는 방법으로 수정해야 한다. 정확히는 수정한다기 보다 새로 정의한다는 개념에 가깝다.
//코드는 아래와 같다.
const num1 = 1;
const num2 = num1 * 3;//num2 =3
const str1 = '문자';
const str2 = str1 + '추가';//str2= '문자추가'
const arr3 = [];
const arr4 = arr3.concat(1); //arr4[1]
const arr5 = [...arr4, 2,3];//arr5 = [1,2,3]
const arr6 = arr.slice(0,1);//arr6 = [1], arr5 = [1,2,3]
const [first, ...arr7] =arr5;//arr7 =[2,3], first = 1
const obj3 = { name: '내이름', age: 20 };
const objValue = { ...obj3, name: '새이름' };//obj4 = {name: '새이름', age: 20}
const obj4 = { ...obj3, name: '새이름' };//obj4 = { name: '새이름', age: 20}
const {name , ...obj5} = obj4;//obj5 = {age: 20}

//가변 내장 함수는 아래와 같다.
/*
    push(...items)
    splice(s,c,...items)
    pop()
    shift()
*/
//무결성 내장 함수는 아래와 같다.
/*
    concat(...items)
    slice(0,s).concat(...items,(slice(s+c)))
    slice(0,len - 1)
    slice(1)
*/
