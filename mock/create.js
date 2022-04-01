//11-2. 대용량 데이터 효율적으로 처리하기

///11-2-1. 페이지 개념 도입하기

/*
    이제까지 만든 가상 코인 거래소는 서버에 모든 데이터를 요청하여 출력하도록 구현되어 있다. 거기에 서버에 요청한 목록 데이터는 배열 형태이다. 배열은 요소의 개수가 많아지면 많아질수록 처리 효율이 떨어지는 자료구조이기에, 서버에 많은 양의 데이터를 요청할수록 가상 코인 거래소의 성능은 떨어질 수 밖에 없다.

    이 문제를 해결하기 위해 페이지 개념을 도입한다. 여기서 페이지란 전체 데이터를 일정 크기로 쪼갠 것을 말한다.
*/


///11-2-2. 가상 데이터 서버 페이지 기능 추가하기

////11-2-2-1. 가상의 거래 목록 데이터 생성하기

/*
    아래는 코인 목록을 100개 생성하기 위한 코드읻. getRandomNumber() 함수는 min, max 사이의 숫자를 무작위로 생성하여 코인 종류를 구분짓거나 totalPrice, currentPrice를 지정할 때 사용한다.

    이와같이 무작위 숫자를 생성하여 각 거래 데이터의 정보가 동일하게 보이지 않도록 도와준다. createData() 함수는 각 코인의 이름에 index를 붙여 아이디를 지정한다.

    실제 코인을 생성하는 부분은 { transactions: ... } 에 해당한다. 여기서는 100개의 코인을 생성한다.
*/

const getRandomNumber = (min, max) => {
    const range = max - min + 1;
    return parseInt(Math.random() * range + min, 10);
}

const createData = (index) => {
    switch(getRandomNumber(0,2)) {
        case 1: {
            return {
                id: `DOIT${index}`,
                code: 'DOIT',
                name: '두잇코인',
                totalPrice: getRandomNumber(10000000,800000000),
                currentPrice: getRandomNumber(20000,25000),
                amount: getRandomNumber(1,30),
                datetime: '2019/01/20 08:23:22',
            };
        }

        case 2: {
            return {
                id: `ETH${index}`,
                code: 'ETH',
                name: '이더리움',
                totalPrice: getRandomNumber(100000000,500000000),
                currentPrice: getRandomNumber(400000,600000),
                amount: getRandomNumber(100,1000),
                datetime: '2019/01/20 08:23:22',
            };
        }
        
        default: {
            return {
                id: `BTX${index}`,
                code: 'BTX',
                name: '비트코인',
                totalPrice: getRandomNumber(100000000000,200000000000),
                currentPrice: getRandomNumber(10000000,40000000),
                amount: getRandomNumber(0,10),
                datetime: '2019/01/20 08:23:22',
            };
        }
    }
}

module.exports = function() {
    return{
        transactions: Array(100).fill('').map((_, index) => createData(index)),
    };
};