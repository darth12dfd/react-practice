//7-3. 그래프 데이터베이스 도입하기

///7-3-1. 객체 배열 형태의 자료를 스토어에 저장하도록 앱 수정하기

////7-3-1-2. dispatch() 함수에서 액션을 전달하고 앱을 실행한다.

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';

class AdvReduxApp extends PureComponent {
    store = configureStore({ loading: false });

    componentDidMount(){
        this.store.dispatch(
            setCollection([
                { id: 1, name: 'John', age: 20 },
                { id: 2, name: 'Park', age: 35 },
            ]),
        );
    }

    render(){
        return <Provider store = {this.store}>리덕스 예제</Provider>;
    }
}

export default AdvReduxApp;
