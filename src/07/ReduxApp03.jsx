//7-2. 액션과 리듀서의 관계 알아보기

///7-2-4. 리듀서 구현하고 실행해보기

/*
    리듀서는 스토어의 데이터(state)와 액션을 인자로 받아 새로운 스토어의 데이터를 반환한다.

    지금까지 사용한 리듀서는 어떤 액션을 받아도 같은 작업만을 수행했다. 이 코드에서는 여러 작업을 수행하는 리듀서를 만들어 본다.
*/

////7-2-4-1. SET_LOADING 리듀서 구현하기

/*
    아래의 코드는 리듀서에 switch문을 도입하여 각 액션 타입에 맞는 작업을 하도록 만든 것이다.

    코드를 보면 action을 구조 분해 할당식을 이용하여 { type, payload }를 추출한다. 액션 타입이 'SET_LOADING'이면 스토어의 데이터를 { ...state, loading: payload }로 변경하여 반환한다.
*/

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = ( state, action ) => {
    const { type, payload } = action;//구조 분해 할당으로 {type, payload}를 분해한다.
    switch(type){
        ////7-2-4-2. 리듀서 수정하기
        case 'SET_LOADING': {//switch 구문으로 액션 타입에 맞는 리듀서 작업을 실행한다.
            return {
                ...state,
                loading: payload,
            };
        }
        case 'RESET_LOADING': {//type이 RESET_LOADING인 경우 스토어 데이터의 loading 값을 무조건 false로 변경한다.
            return { ...state, loading: false };
        }
        case 'SET_USER': {//type이 SET_USER인 경우 payload의 값으로 user의 값을 변경한다.
            return {
                ...state,
                user: payload,
            };
        }
        default:
            return state;
    }
};

class ReduxApp extends PureComponent {
    store = createStore(
        reducer,
        { loading: false, name: '두잇 리액트' },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    componentDidMount(){
        this.store.dispatch({//리덕스 스토어를 컴포넌트가 출력된 이후 변경하도록 액션 호출 함수 dispatch()를 실행한다.
            type: 'SET_LOADING',
            payload: true,
        });
        this.store.dispatch({ type: 'RESET_LOADING' });//RESET_LOADING에 해당하는 액션을 호출한다.
        this.store.dispatch({//SET_USER에 해당하는 액션을 payload와 함께 호출한다.
            type: 'SET_USER',
            payload: { name: 'Park', age: 20 },
        });
    }

    render(){
        return(
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        );
    }
}

export default ReduxApp;