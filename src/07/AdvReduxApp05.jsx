//7-3. 그래프 데이터베이스 도입하기

///7-3-3. 그래프 DB 수정하기

////7-3-3-3. 리듀서 추가하고 그래프 DB 수정 확인하기

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';
import { setAge } from './actions/collectionActions02';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Park', age: 35 },
      ]),
    );
    this.store.dispatch(setAge(2,55));

    const { collection } = this.store.getState();
    const { ids, entities } = collection;
    const originalPayload = ids.map(id => entities[id]);
    console.log(originalPayload);
  }

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}
export default AdvReduxApp;
