//04-3 스타일 컴포넌트 만들기

//react-with-styles로 스타일을 적용한 Text 컴포넌트 만들기
//3. 텍스트 예제 컴포넌트 만들기
//5. withStyles() 함수로 react-with-styles 사용해보기
//6. Text 컴포넌트에 스타일 추가하기
//7. 프로퍼티에 따라 Text 컴포넌트에 다양한 스타일 변경하기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles'; //withStyles 파일 임포트, css() 함수를 임포트하여 엘리먼트에 스타일 적용

class Text extends PureComponent {
  render() {
    const { children, styles, large, xlarge, small, xsmall, primary, secondary } = this.props;
    return (
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
        )}
      >
        {children}
      </span> //css()함수로 엘리먼트에 default 키에 정의된 스타일을 적용한다. css() 함수는 엘리먼트 속성값을 객체형으로 반환하므로 전개 연산자를 사용해 span 엘리먼트에 스타일을 적용했다.
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
};

export default withStyles(({ color, size }) => ({
  //스타일 생성 함수를 호출하여 테마 파일에 등록된 값{ color, size }를 withStyles() 함수에게 전달한다.
  default: {
    color: color.default,
    fontSize: size.md, //스타일 속성을 스네이크 표기법이 아닌 낙타 표기법으로 사용한다.
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  xsmall: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
