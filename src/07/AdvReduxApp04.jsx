//7-3. 그래프 데이터베이스 도입하기

///7-3-2. 스토어에 저장된 데이터 읽어 들이기(그래프 DB 읽어들이기)

////7-3-2-1. 스토어 읽어들이기

/*
    store.getState() 함수를 이용하면 스토어 전체 객체에 접근하 수 있다. 그래프 DB는 collection이라는 키의 값이므로 객체 분할 할당식으로 추출한다.
*/

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Park', age: 35 },
      ]),
    );
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