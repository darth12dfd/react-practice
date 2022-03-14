//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-7. 사용자와 상호작용을 위한 컴포넌트 만들기

/*
    사용자가 상호작용을 위해 사용하는 요소는 버튼, 입력 컴포넌트이다. 순서대로 각 컴포넌트를 구현한다.
*/

///08-2-7-3. Option 컴포넌트 만들기

/*
    Option 컴포넌트를 Select 컴포넌트의 자식 컴포넌트로 출력하면 선택 항목을 구현할 수 있다.
*/

/*
    HTML의 option 엘리먼트는 문자 형태의 글만 출력하기 때문에 자식 프로퍼티를 사용하는 방법 보다는 단순한 글자 프로퍼티(label)를 받아 출력하도록 구성한다.
    label 프로퍼티없이 컴포넌트를 사용할 경우는 value 프로퍼티 값으로 글자를 출력하도록 한다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Option extends PureComponent {
  render() {
    const { value, label, disabled } = this.props;

    return (
      <option value={value} disabled={disabled}>
        {label || value}
      </option>
    );
  }
}

Option.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Option;