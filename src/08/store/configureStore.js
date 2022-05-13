//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/

//09-3-1. 액션, 리듀서, 스토어 만들기

///09-3-1-4. 스토어 설정 파일 추가하기

import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';

import notificationEffects from '../middlewares/notificationEffects';
//import transactionEffects from '../middlewares/transactionEffects';

import searchFilterEffects from '../middlewares/searchFilterEffects';//12-3-2-2. 스토어 설정 파일에 라우터 미들웨어를 추가한다.

//10-1-1-2. 간단한 미들웨어 만들어 적용하기

/*
const customMiddleware = store => nextRunner => action => {
    console.log('미들웨어에 전달된 액션 개체',action);//nextRunner() 함수 이전에 실행할 작업 1
    console.log('리듀서 실행 전',store.getState());//nextRunner() 함수 이전에 실행할 작업 2
    const result = nextRunner(action);
    console.log('리듀서 실행 후',store.getState());
    return result;
}
*/

//10-1-2. 미들웨어로 액션 변형하기

///10-1-2-1. 특정 액션의 payload 값 변경하기
/*
    액션의 type이 SET_TRANSACTION_LIST 인경우 payload의 값을 변경하는 미들웨어이다.
*/

/*
const customMiddleware1 = () => nextRunner => action => {
    if(action.type === SET_TRANSACTION_LIST){
        return nextRunner({
            ...action,
            payload: [{
                id:0,
                code:'DOIT',
                name:'두잇코인(DOIT)',
                totalPrice: 1000000000,
                currentPrice: 25000,
                datetime: '현재시간',
            }],
        });
    }

    return nextRunner(action);
}
*/

/*
const customMiddleware2 = store => nextRunner => action => {
    console.log('미들웨어2 전달된 액션 개체',action);
    console.log('미들웨어2 실행 전',store.getState());
    const result = nextRunner(action);
    console.log('미들웨어2 살행 후',store.getState());
    return result;
}
*/

//11-1. redux-pack 미들웨어로 비동기 제어하기

///11-1-1. 가상 코인 거래소에 redux-pack 적용하기

////11-1-1-1. redux-pack 스토어 설정 파일에 추가하기

import { middleware as reduxPackMiddleware } from 'redux-pack';
import routerEffects from '../middlewares/routerEffects';

export default initStates => createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
        applyMiddleware(thunk, reduxPackMiddleware,searchFilterEffects,notificationEffects,routerEffects),
    ),
);