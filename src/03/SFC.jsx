//03-7 함수형 컴포넌트

/*
    함수형 컴포넌트는 조금 길게 표현하여 state가 없는 함수형 컴포넌트라고 부른다. 이를 줄여 SFC라고 부른다.
    함수형 컴포넌트는 state를 포함하지 않으며 데이터를 받아 출력할 컴포넌트를 반환한다.
*/

//함수형 컴포넌트의 구조
/*
    함수형 컴포넌트는 함수와 동일한 구조를 가지고 있다. 입력받은 프로퍼티와 컨텍스트를 이용하여 화면을 출력하는 것이다.
*/

import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  //클래스형 컴포넌트의 this.props값과 동일하다.
  const { somePropValue } = props;
  //클래스형 컴포넌트의 this.context와 동일하다.
  const { someContextValue } = context;
  return <h1>Hello, {somePropValue} </h1>;
}

SFC.PropTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;

/*
    함수형 컴포넌트에는 클래스 선언이 없다.
    상위 컴포넌트로부터 전달받은 프로퍼티와 컨텍스트만을 이용하여 화면을 구성한다.
    함수형 컴포넌트는 state와 생명주기 함수를 사용할 수 없으며, 그렇기에 함수형 컴포넌트는 단순한 구조의 UI 컴포넌트를 제작할 때 많이 사용한다.
*/
