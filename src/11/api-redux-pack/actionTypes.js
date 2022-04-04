//11-4. axios 호출 작업 모듈화하기

/*
    지금까지 액션과 리듀서를 변경하거나 그래프 DB 구조를 변경하여 서버에서 받아온 데이터를 효율적으로 관리하는 방법에 대해 공부했다.

    지금까지는 거래 정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있다. 이런 것들을 다시 리덕스로 처리하려면 또 다시 액션, 리듀서 ,셀렉트, 리셀렉트 등을 작성해야 한다.

    여기서는 axios 호출 작업을 모듈화하며 회원 정보에 대한 로딩 상태와 알림 표시를 도일하게 처리할 수 있도록 만들어본다.
*/

//11-4-1. 액션 모듈화하기

///11-4-1-1. 파일에 액션 type 저장하기

export const FETCH_LIST = 'api-redux-pack/FETCH_LIST';
export const FETCH = 'api-redux-pack/FETCH';
export const UPDATE = 'api-redux-pack/UPDATE';
export const CREATE = 'api-redux-pack/CREATE';
export const RESET = 'api-redux-pack/RESET';

