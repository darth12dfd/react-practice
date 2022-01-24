//07-1 리덕스 기초 알아보기

/*
    리덕스는 컨텍스트보다 조금 더 체계적으로 데이터를 관리한다.

    리덕스는 데이터를 스토어라는 곳에서 관리한다.
*/

///7-1-1. 스토어를 중심으로 리덕스 개념 알아보기

/*
    스토어에서 데이터가 컴포넌트로 흘러가고 컴포넌트에서 스토어의 데이터 변경을 요청한다.

    컨텍스트의 공급자, 소비자의 개념과 비슷하나 여러 개의 공급자를 관리하던 컨텍스트와는 달리 리덕스는 스토어에서 모든 데이터를 관리한다.
*/

///7-1-2. 리덕스와 컨텍스트 중 무엇을 사용해야 할까?

/*
    서버에서 가져온 데이터를 이용하여 새로운 결과물을 만드는 경우 리덕스를 사용하고 컴포넌트의 통합 데이터를 관리하는 경우 컨텍스트를 사용한다.

    아래는 리액트에서 데이터를 다루기 위해 배운 요소를 정리한 것이다.

    프로퍼티: 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터이다.
    state: 컴포넌트의 state를 저장하고 변경할 수 있는 데이터이다.
    컨텍스트: 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터이다.
    리덕스: 서버에서 받은 데이터를 앱 전ㅇ체에 전달하거나 관리한다.
*/

///7-1-3. 리덕스의 동작 과정

/*
    컴포넌트는 dispatch() 함수를 통해 리듀서에 액션을 전달한다.

    액션에서는 리듀서에서 처리해야 할 작업의 이름과 데이터가 객체 형태로 들어있다.

    리듀서는 액션을 받아 스토어 변경 작업을 진행한다. 스토어 변경 작업이 완료되면 connect() 함수로 연결된 컴포넌트에 변경된 스토어의 데이터를 전파하여 동기화한다.
*/

///7-1-4. 리덕스로 빈 스토어 생성해보기

/*
    리덕스를 사용하려면 스토어를 생성해야 한다. 다음은 스토어를 생성해주는 createStore() 함수의 기본 사용법이다.

    createStore(reducer, initial state, enhancer)

    createStore() 함수는 리듀서, 스토어 데이터의 초깃값, 미들웨어 함수를 인자로 받는다. 이때 데이터 초깃값과 미들웨어는 생략해도 스토어가 생성된다.

    미들웨어는 리듀서 함수가 실행될 때 함께 실행되는 함수들을 의미한다.
*/

////7-1-4-1. 스토어 생성하기

/*
    아래의 코드는 createStore() 함수의 리듀서로 state => state를 전달하여 스토어를 생성한 것이다.
*/

import React, { PureComponent } from 'react';
import { createStore } from 'redux';//리덕스의 createStore() 함수를 임포트한다.
import { Provider } from 'react-redux';//react-redux의 Provider 컴포넌트를 사용하여 스토어 데이터를 하위 컴포넌트에 전달한다.

class ReduxApp extends PureComponent {
    store = createStore(
        state => state,
        { loading: false, name: '두잇 리액트'},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//스토어에 스토어 데이터 설정한다.
        );//리듀서를 createStore() 함수의 인자로 전달한다. 그리고 리덕스 개발자 도구를 연동한다.

    render(){
        return(
            <Provider store = { this.store }>
                리덕스 예제
            </Provider>
        );
    }
}

export default ReduxApp;

/*
    코드를 보면 Provider 컴포넌트에 store 프로퍼티를 사용했다. Provider는 react-redux에서 제공하는 스토어 데이터 공급자이다.

    이 컴포넌트에 store 프로퍼티로 스토어 데이터를 전달했다. 이후 Provider 컴포넌트 아래에 배치한 컴포넌트들이 스토어에 연결될 것이다.
*/