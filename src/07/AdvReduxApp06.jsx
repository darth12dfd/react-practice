//7-4. 데이터를 위한 컴포넌트 알아보기

///7-4-2. 데이터 컴포넌트와 화면 컴포넌트 출력하기

////7-4-2-3. 데이터 컴포넌트 출력하기

/*
    7-4-2-1 ~ 7-4-2-2 과정을 통해 만든 화면 컴포넌트와 데이터 컴포넌트를 출력한다. 결과 화며늘 보면 화면 컴포넌트는 userName 프로퍼티에 전달된 값만 출력한다.

    반면 데이터 컴포넌트는 id 프로퍼티로 전달받은 값에 대한 그래프 DB의 데이터를 출력한다.
*/

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';
import { setAge } from './actions/collectionActions02';

import ContainerComponent from './containers/ContainerComponent';
import PresentationComponent from './PresentationComponent';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Park', age: 35 },
      ]),
    );
    this.store.dispatch(setAge(2, 55));
    const { collection } = this.store.getState();
    const { ids, entities } = collection;
    const originalPayload = ids.map(id => entities[id]);
    console.log(originalPayload);
  }

  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
      </Provider>
    );
  }
}
export default AdvReduxApp;