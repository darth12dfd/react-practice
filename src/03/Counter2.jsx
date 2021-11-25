//03-9 컴포넌트에서 콜백 함수와 이벤트 처리하기
//하위 컴포넌트 작성하기

import React from 'react';
import PropTypes from 'prop-types';

class Counter2 extends React.Component {
  render() {
    return (
      <div>
        현재 카운트: {this.props.count}
        <button onClick={() => this.props.onAdd()}>카운트 증가</button>
      </div>
    );
  }
}

Counter2.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter2;
