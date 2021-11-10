//03-3 컴포넌트에 데이터를 전달하는 프로퍼티

//다양한 프로퍼티 사용하기
//프로퍼티에 문자열을 전달할 때는 큰따옴표를 사용한다. 하지만 숫자형이나 불리언 등의 값을 전달할 때는 큰 따옴표를 사용할 수 없다. 리액트에서 문자열 외의 값은 따옴표 대신 중괄호를 사용해야 한다.

import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props; //객체 구조 분해 할당식을 사용하여 프로퍼티에 전달된 값들을 render() 함수 내의 지역 변수로 재정의한다.

    return (
      <div>
        <span>불리언값: {boolValue}</span>
        <span>숫자값: {numValue}</span>
        <span>배열값: {arrayValue}</span>
        <span>객체값: {objValue}</span>
        <span>노드값: {nodeValue}</span>
        <span>함수값: {String(funcValue)}</span>
      </div>
    );
  }
}

//객체 형태로 프로퍼티의 자료형을 정의한다.
ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
