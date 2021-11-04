//ES6의 forEach() 함수 사용 방법 알아보기

//기존 자바스크립트로 쿼리 스트링을 & 문자를 기준으로 분리하여 객체에 담아 반환하는 parse() 함수를 선언한다.

/*
function parse(qs){
    var queryString = qs.substr(1);//querystring = 'banana=10&apple=20&oragne=30`

    var chunks = qs.split('&');
    var result = {};

    for(var i = 0; i< chunks.length; i++){
        var parts = chunks[i].split('=');
        var key = parts[0];//key = 'banana'
        //var value = parts[1];//value= '10'
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);//10,20,30을 문자열이 아닌 숫자로 받는 경우
        result[key] = value;//result = { banana: '10' }
    }

    return result;
}
*/

//위의 코드를 ES6의 forEach() 함수를 사용하면 반복문의 순번과 배열의 크기를 따로 변수에 저장하는 과정을 생략할 수 있다.

function parse(qs){
    const queryString = qs.substr(1);//queryString = 'banana=10&apple=20&orange=30;
    const chunks = queryString.split('&');//chunks = ['banana=10', 'apple=20', 'orange=30']

    //가변 변수 let을 쓰는 경우
    /*
    let result = {};
    chunks.forEach((chunck) => {
        
        //const parts = chunk.split('=');// chunck = 'banana=10', parts = [ 'banana', '10']
        //const key = parts[0];//key = 'banana'
        //const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        
        //키와 키값을 구조 분해 할당 방식으로 변환
        const [key, value] = chunk.split('=');//key = 'banana', value = '10'
        result[key] = value;//result = { banana: 10 }
    });
    */
   
    //ES6의 map() 함수 알아보기
    //가변 변수 let 이 아닌 불변 변수 const만을 사용하려면 map() 함수를 사용하면 된다.
    //map 함수는 각 배열 요소를 정의된 함수를 통해 변환한 결괏값들로 새 배열을 반환한다.
    /*
    const result = chunks.map((chunk) => {
        const [key, value] = chunk.split('=');//key = 'banana', value = '10'
        result[key] = value;//result = { banana: 10 }
    });
    return result;
    */
    //parse('banana=10&apple=20&orange=30') 실행 결과
    /*result =[
        {key: 'banana', value: '10' },
        {key: 'apple', value: '20' },
        {key: 'orange', value: '30' }
    ];
    */

    //reduce 함수를 사용해서 배열을 객체로 변환
    return chunks.map((chunck) => {
        const [key, value] = chunk.split('=');//key = 'banana', value = '10'
        return {key, value};//{key: 'banana', value: '10' }
    }).reduce((result,item) => {//result = {}, item = { key: 'banana', value: '10' }
        result[item.key] = item.value;//result = { banana: '10' }
        return result;
    },{});
}

//reduce 함수 사용법

function sum(numbers){
    return numbers.reduce((total, num) => total + num , 0);
}

sum([1,2,3,4,5,6,7,8,9,10]);//55
