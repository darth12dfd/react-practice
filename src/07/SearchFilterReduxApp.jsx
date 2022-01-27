////7-5. 검색 기능 만들면서 리덕스 복습하기

///7-5-2. 검색창 만들기

///7-5-2-2. 리덕스 앱에 검색창  추가하기

/*
    searchFilterInputContainer 컴포넌트를 추가하면 입력창으로 각각 name 값에 해당하는 검색 항목을 변경할 수 있게 된다.

    즉, 검색을 위해 입력한 내용이 리덕스 스토어에 저장된다. 아이디 검색, 이름 검색, 나이 검색에 검색 단어를 입력하고 리덕스 크롬 확장도구를 확인하면 입력된 검색 단어를 확인할 수 있다.
*/

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ContainerComponent from './containers/ContainerComponent';
import PresentationComponent from './PresentationComponent';
import DispatchContainer2 from './containers/DispatchContainer2';
import SearchFilterInputContainer from './containers/SearchFilterInputContainer';
import SearchResetButtonContainer from './containers/SearchResetButtonContainer';
import SearchResultTableContainer from './containers/SearchResultTableContainer';

class SearchFilterReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  render() {
    return (
      <Provider store={this.store}>
        리덕스 예제
        <fieldset>
          <SearchFilterInputContainer type="number" name="id" label="아이디 검색" />
          <SearchFilterInputContainer name="name" label="이름 검색" />
          <SearchFilterInputContainer type="number" name="age" label="나이 검색" />
          <SearchResetButtonContainer>리셋</SearchResetButtonContainer>
        </fieldset>
        <SearchResultTableContainer />
        화면 컴포넌트: <PresentationComponent userName="사용자 이름" />
        <br />
        데이터용 컴포넌트: <ContainerComponent id={232} />
        <br />
        <DispatchContainer2 />
      </Provider>
    );
  }
}
export default SearchFilterReduxApp;
