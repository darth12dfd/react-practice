//ES6 이전 문법에서 배열 연산
/*
    var array1 = ['one','two'];
    var array2 = ['three','four'];
    var combined = [array1[0], array1[1], array2[0], array2[1]];//배열의 각 요소 추출 후 새로운 배열 생성
    //concat() 함수로 두 배열 합치기
    var combined = array1.concat(array2);
    var combined = [].concat(array1,array2);
    var first = array1[0];
    var second = array1[1];
    var three = array1[2] || 'empty';// || 연산자를 조합하면 추출할 배열 요소가 없을 때 기본값을 지정할 수 있다.
    function func(){
        var args = Array.prototype.slice.call(arguments);//특수변수(arguments)를 사용해 함수 내 인자 항목들을 배열로 변환한다.
        var first = args[0];
        var others = args.slice(1,args.length);//인덱스 범위에 해당하는 배열 요소를 추출한다.
    }
*/

//ES6의 배열 전개 연산자 사용 방법
var array1 = ['one','two'];
var array2 = ['three','four'];
const combined = [...array1, ...array2];//두 배열의 항목을 전개 연산자로 합치기
//결과: combined = [ 'one', 'two', 'three', 'four' ];
const [first, second ,three = 'empty', ...others] = array1;//array1의 각 위치에 있는 요소를 추출하고 기본값과 함께 배열요소를 추출한 뒤, 남은 요소를 추출한다.
//결과: first = 'one', second = 'two', three = 'empty', others = []
//올바르지 못한 예
//var wrongArr = ...array1;//전개 연산자를 배열 표현식 없이 사용한 잘못된 코드

//함수 인자 배열을 args 변수에 할당
function func(...args){
    var [first, ...others] = args;
}