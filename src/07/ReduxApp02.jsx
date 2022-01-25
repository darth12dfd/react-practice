//7-2. 액션과 리듀서의 관계 알아보기

///7-2-1. 액션

/*
    액션은  { type: ..., payload: ... } 구조로 된 객체를 말한다.

    여기서 type은 액션이 어떤 작업인지 쉽게 이해할 수 있는 고유한 값(중복되지 않은 값)으로 구분한 문자열로 넣어준다. payload는 스토어에 사용될 값이다. 
    
    이때 키 이름 type은 바꾸면 안되고 payload는 다른 이르믕로 지어도 된다.

    {
        type: 'SET_LOADING',
        payload: true,
    }
    {
        type: 'SET_USER',
        payload: { name: 'Park', age: 20 }
    }

    또한 payload는 생략할 수 있다. payload의 생략은 스토어의 데이터를 초기화하는 경우 자주 보게 된다.

    {
        type: 'RESET_LOADING',
    }
*/

///7-2-2. 리듀서

/*
    리듀서는 다음과 같은 간단한 함수 구조를 가진다.

    function reducer(state, action) { return state; }

    리듀서는 스토어의 이전 데이터(state), 액션(action)을 받아 새로운 스토어의 데이터를 반환한다.

    아래는 스토어의 이전 데이터(state)를 새로운 데이터(state + action.payload)로 변경한다.

    const reducer = (state, action) => state + action.payload;

    이때 리듀서가 반환하는 값의 자료형은 스토어의 이전 데이터와 동일해야 한다는 점에 주의해야 한다.
*/

///7-2-3. dispatch() 함수 알아보기

/*
    액션은 dispatch() 함수를 통해 리듀서로 전달된다. 실제로 액션이 리듀서에 어떻게 전달되는지 알아본다.

    아래의 코들르 보면 componentDidMount() 함수 안에서 { type: 'SET_LOADING', dispatch: true }라는 액션이 dispatch() 함수를 통해 리듀서 ( state => state )에 전달하고 있다.
*/

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class ReduxApp extends PureComponent {
    store = createStore(
        state => state,
        { loading: false, name: '두잇 리액트' },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    componentDidMount(){
        this.store.dispatch({
            type: 'SET_LOADING',
            payload: true,
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

/*
    코드를 실행하고 크롬 리덕스 확장 도구를 열어보면 위쪽에 SET_LOADING이라는 액션 타입이 나타난다.

    액션을 선택한 다음 아래에 있는 [Action]을 누르면 상세 내용을 확인할 수 있다. [State]를 누르면 리듀서에 전달된 액션에 의해 바뀐 스토어 데이터(state)도 확인이 가능하다.

    [Diff]는 이전 state와 현재 state를 비교하여 알려주는데 리듀서가 state를 변화시키지 않으므로 'states are equal'이라는 문구를 출력한다.
*/