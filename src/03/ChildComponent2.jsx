//03-3 컴포넌트에 데이터를 전달하는 프로퍼티

//객체형 프로퍼티, 필수 프로퍼티 사용하기
import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue} </div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  //객체 프로퍼티
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  //필수 프로퍼티
  requiredStringValue: PropTypes.string.isRequired, //PropTypes에 정의된 변수(string,object,bool,...)안의 특수 변수 isRequired를 이용하여 requiredStringValue를 필수 프로퍼티로 지정한다.
};

//필수 프로퍼티 사용하기
//특정 컴포넌트에 꼭 전달 되어야 하는 프로퍼티가 있다면 해당 프로퍼티를 필수 프로퍼티로 지정하면 된다.

export default ChildComponent2;
