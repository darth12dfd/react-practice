//7-2. 액션과 리듀서의 관계 알아보기

///7-2-5. 리듀서 분리하기

////7-2-5-5. 리액트 앱 다시 구성하기

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
    this.store.dispatch({
      type: 'RESET_LOADING',
    });
    this.store.dispatch({
      type: 'SET_USER',
      payload: { name: 'Park', age: 20 },
    });
  }

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}
export default AdvReduxApp;