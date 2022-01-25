//7-2. 액션과 리듀서의 관계 알아보기

///7-2-5. 리듀서 분리하기

////7-2-5-4. 스토어 설정 파일 만들기

/*
    여러 개의 리듀서는 combineReducers() 함수로 묶어 createStore() 함수의 인자로 전달하면 왼다.

     앞에서 리덕스 크롬 확장자 도구를 사용하기 위해 추가했던 window.__REDUX_DEVTOOLS_EXTENSION__() 함수는 composeWithDevTools() 함수로 대체되었다. 그리고 createStore() 함수의 미들웨어 인자로 전달한다.
*/

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default initStates => createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(),
);