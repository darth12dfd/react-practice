//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-4. 화면 출력을 위한 컴포넌트 만들기

///08-2-4-2. Heading 컴포넌트 만들기

/*
    Heading 컴포넌트는 level을 프로퍼티로 받아 머리글의 크기를 다르게 출력할 때 사용한다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from './withStyles';
const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

class Heading extends PureComponent {
  render() {
    const {
      children,
      inverse,
      level,
      styles,
    } = this.props;

    const HeadingTag = headingTags[level - 1];

    return (
      <HeadingTag
        {...css(
          styles.default,
          styles[`level${level}`],
          inverse && styles.inverse,
        )}
      >
        {children}
      </HeadingTag>
    );
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  level: PropTypes.number,
};
Heading.defaultProps = {
  level: 1,
};

export default withStyles(({
  color,
  fontWeight,
  size,
  lineHeight,
  unit,
}) => ({
  default: {
    lineHeight: lineHeight.lg,
    fontWeight: fontWeight.bold,
  },
  inverse: {
    color: color.white,
  },
  level1: {
    fontSize: size.h1,
    marginTop: unit * 2,
    marginBottom: unit * 4,
  },
  level2: {
    fontSize: size.h2,
    marginTop: unit * 2,
    marginBottom: unit * 4,
  },
  level3: {
    fontSize: size.h3,
    marginTop: unit * 1.5,
    marginBottom: unit * 3,
  },
  level4: {
    fontSize: size.xg,
    marginTop: unit,
    marginBottom: unit * 2,
  },
  level5: {
    fontSize: size.md,
    marginTop: unit,
    marginBottom: unit * 2,
  },
  level6: {
    fontSize: size.md,
    marginTop: unit,
    marginBottom: unit,
  },
}))(Heading);
