//7-4. 데이터를 위한 컴포넌트 알아보기

///7-4-3. 데이터 컴포넌트에 액션 연결하기

////7-4-3-4. 5개의 액션 추가하기

/*
    setLoading, resetLoading, setUser, setCollection, setAge 등의 액션 함수의 실행 버튼을 추가하여 화면 컴포넌트에 작성한다. collection 리듀서에 전달할 데이터도 조금 변경한다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';

class AdvActionComponent extends PureComponent {
  render() {
    const { setLoading, resetLoading, setUser, setCollection, setAge } = this.props;
    const collection = [
      { id: 21, name: 'John', age: 20 },
      { id: 2, name: 'Justin', age: 40 },
      { id: 3, name: 'Mary', age: 21 },
    ];
    return (
      <React.Fragment>
        <Button onPress={() => setLoading(true)}>setLoading</Button>
        <Button onPress={() => resetLoading()}>resetLoading</Button>
        <Button onPress={() => setCollection(collection)}>setCollection</Button>
        <Button onPress={() => setUser({ name: 'Park', age: 20 })}>setUser</Button>
        <Button onPress={() => setAge(2, 55)}>setAge</Button>
      </React.Fragment>
    );
  }
}

AdvActionComponent.propTypes = {
  setLoading: PropTypes.func,
  resetLoading: PropTypes.func,
  setUser: PropTypes.func,
  setCollection: PropTypes.func,
  setAge: PropTypes.func,
};

export default AdvActionComponent;