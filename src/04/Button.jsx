//04-3 스타일 컴포넌트 만들기

//react-with-styles로 스타일을 적용한 Button 컴포넌트 만들기

//1. Button 컴포넌트 기능 구현하기
//2. Button 컴포넌트 스타일 적용하기

//반응형으로 스타일 구성하기
//2. 버튼 컴포넌트에 미디어 속성값 적용하기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles'; //css() 함수와 withStyles() 함수를 임포트하여 엘리먼트에 적용한다.

class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      onPress,
    } = this.props;

    return (
      <button
        {...css(
          styles.default, //default 스타일을 기본으로 적용한다.
          xsmall && styles.xsmall, //Text 컴포넌트와 동일한 방법으로 크기와 색상을 변경하는 프로퍼티 추가
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
        )}
        onClick={onPress}
      >
        {children}
      </button>
    ); //버튼 엘리먼트를 클릭할 경우 onPress() 함수를 호출한다. 그리고 프로퍼티로 전달받은 children 노드를 출력한다.
  }
}

//onPress 프로퍼티는 함수 타입으로, 기본값으로 빈 실행함수를 전달하여 프로퍼티가 선언되지 않아도 엘리먼트의 이벤트에서 콜백 함수를 실행할 때 ,undefined 오류가 발생하는 것을 방지한다.
Button.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  seondary: false,
  primary: false,
};
export default withStyles(({ color, size, unit, responsive }) => ({
  //Text 컴포넌트와 동일한 방법으로 크기와 색상을 변경하는 프로퍼티 추가
  //small,xsmall, 버튼의 경우 unit *1 크기의 패딩으로 조정
  default: {
    //버튼의 기본 모양 구성.(전체 테두리 두께는 1px, 2px의 둥근 테두리 모양. 패딩 크기는 unit * 2)
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: 'pointer',
    [responsive.small]: {
      //미디어 스타일값 responsive.small을 키로 사용하여 추가 스타일 항목을 하위 객체로 할당한다.
      width: '100%',
    },
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
  },
}))(Button);
