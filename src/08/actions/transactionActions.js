//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/

//09-3-1. 액션, 리듀서, 스토어 만들기

///09-3-1-1. 액션 구성하기

/*
    서버가 보내준 '거래 목록 정보'를 리덕스 스토어에 저장하려면 웃너 액션이 었어야 한다. 
*/

/*

export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
    return {
        type: SET_TRANSACTION_LIST,
        payload: transactions,
    };
}

*/

//10-2. redux-thunk와 비동기 제어

///10-2-3. redux-thunk로 비동기 처리하기

///10-2-3-3. 가상 코인 거래소에 거래 목록을 요청하는 액션 함수 추가하기

/*
    서버에 거래 목록을 요청하는 액션 함수 requestTransactionList()를 추가한다. redux-thunk에 의해 함수가 반환하는 값이 객체가 아니라 함수가 된다.

    그렇기에 Api.get(...) 이후에 dispatch() 를 호출할 수 있다. 즉, 액션에 필요한 지연 작업을 포함할 수 있게 된다.
*/

import Api from "../Api";

export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions){
    return{
        type: SET_TRANSACTION_LIST,
        payload: transactions,
    };
}

///10-2-3-6. 검색을 통해 거래 목록을 불러올 수 있도록 액션 함수 수정하기

export function requestTransactionList(params){
    return dispatch =>
        Api.get('/transactions', { params }).then(
            ({ data }) => dispatch(setTransactionList(data))
        );
}