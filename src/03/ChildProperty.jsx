//03-3 컴포넌트에 데이터를 전달하는 프로퍼티

//자식 프로퍼티 사용하기
//JSX도 마크업 표현식을 모두 사용할 수 있다. JSX에서는 컴포넌트 하위에 배치한 노드를 하위 컴포넌트에서 프로퍼티로 접근할 수 있게 도와준다.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ChildProperty.propTypes = {
  children: PropTypes.node,
};

export default ChildProperty;
