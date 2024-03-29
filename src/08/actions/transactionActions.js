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

export const SET__LIST = '/SET__LIST';

export function setList(s) {
    return {
        type: SET__LIST,
        payload: s,
    };
}

*/

//10-2. redux-thunk와 비동기 제어

///10-2-3. redux-thunk로 비동기 처리하기

///10-2-3-3. 가상 코인 거래소에 거래 목록을 요청하는 액션 함수 추가하기

/*
    서버에 거래 목록을 요청하는 액션 함수 requestList()를 추가한다. redux-thunk에 의해 함수가 반환하는 값이 객체가 아니라 함수가 된다.

    그렇기에 Api.get(...) 이후에 dispatch() 를 호출할 수 있다. 즉, 액션에 필요한 지연 작업을 포함할 수 있게 된다.
*/

/*
import Api from "../Api";


export const SET__LIST = '/SET__LIST';

export function setList(s){
    return{
        type: SET__LIST,
        payload: s,
    };
}

///10-2-3-6. 검색을 통해 거래 목록을 불러올 수 있도록 액션 함수 수정하기

export function requestList(params){
    return dispatch =>
        Api.get('/s', { params }).then(
            ({ data }) => dispatch(setList(data))
        );
}
*/

//10-3. 서버 지연 처리와 오류 표시하기

/*
    서버에서 데이터를 처리하고 돌려주는 과정에는 시간이 많이 필요하다. 가끔은 서버의 오류로 데이터를 전달받지 못하는 경우도 있다.

    그렇기에 실무에서는 사용자가 서버의 처리나, 서버의 오류를 인지할 수 있도록 지연 또는 오류 상태를 알려주는 화면을 개발한다.

    여기서는 리덕스를 활용하여 지연 또는 오류에 대한 정보를 알려주는 화면 출력 방법을 알아본다.
*/

///10-3-1. 서버 지연 상태 알려주기

////10-3-1-1. 로딩 상태 변경 액션 추가하기

import Api from '../Api';
import { showMessage } from './notificationActions';
export const LOADING__LIST = '/LOADING__LIST';
export const SET__LIST = '/SET__LIST';
export const SET_ERROR = '/SET_ERROR';

export function setList(s) {
  return {
    type: SET__LIST,
    payload: s,
  };
}

export function requestList(params) {
  return (dispatch) => {
    dispatch(loading()); //loading 액션 함수를 이 안에서 dispatch(loading())과 같이 호출하도록 변경한다.
    Api.get('/s', { params }).then(
      ({ data }) => dispatch(setList(data)),
      (error) => {
        dispatch(setError(error.response.data.errorMessage));
        //dispatch(showMessage(error.response.data.errorMessage, true));
      },
    );
  };
}

export function loading() {
  return {
    type: LOADING__LIST,
  };
}

export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: { errorMessage },
  };
}

//10-5. 코인 거래 알림 효과 추가하며 마무리하기

/*
    코인 거래 기능에 오류 메시지 뿐 아니라 코인 거래 처리 과정을 알려주는 메시지를 알림창에 표시한ㄷ. 
*/

///10-5-1. 코인 거래 처리 과정 메시지 알림창에 표시하기

////10-5-1-1. 거래 요청 액션 추가하기

export const TRADE_COMPLETE = '/TRADE_COMPLETE';

export function tradeComplete() {
  return { type: TRADE_COMPLETE };
}

export function create(data, onComplete) {
  return (dispatch) =>
    Api.post('/s', data).then(
      ({ data }) => {
        dispatch(tradeComplete());
        onComplete();
      },
      (error) => dispatch(setError(error.response.data.errorMessage)),
    );
}
