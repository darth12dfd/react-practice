//7-2. 액션과 리듀서의 관계 알아보기

///7-2-6. 액션 분리하기

////7-2-6-2. 리액트 앱 수정하기

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(resetLoading());
    this.store.dispatch(setUser({ name: 'Park', age: 20 }));
  }

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}
export default AdvReduxApp;