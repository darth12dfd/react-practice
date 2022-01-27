//7-4. 데이터를 위한 컴포넌트 알아보기

///7-4-3. 데이터 컴포넌트에 액션 연결하기

////7-4-3-6. 리액트 앱에 ActionComponent를 출력하면 5개의 버튼이 있다. 각 버튼이 액션 함수를 호출하므로 하나씩 눌러 확인해본다.

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import ContainerComponent from './containers/ContainerComponent';
import PresentationComponent from './PresentationComponent';
import DispatchContainer2 from './containers/DispatchContainer2';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
        <br />
        최종 액션 데이터 컴포넌트: <DispatchContainer2 />
      </Provider>
    );
  }
}
export default AdvReduxApp;