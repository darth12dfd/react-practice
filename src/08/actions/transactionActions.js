//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/

//09-3-1. 액션, 리듀서, 스토어 만들기

///09-3-1-1. 액션 구성하기

/*
    서버가 보내준 '거래 목록 정보'를 리덕스 스토어에 저장하려면 웃너 액션이 었어야 한다. 
*/

export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
    return {
        type: SET_TRANSACTION_LIST,
        payload: transactions,
    };
}

