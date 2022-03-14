//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-4. 화면 출력을 위한 컴포넌트 만들기

///08-2-4-1. Text 컴포넌트 만들기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from './withStyles';

class Text extends PureComponent {
  render() {
    const {
      children,
      bold,
      light,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      inverse,
    } = this.props;
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
          bold && styles.bold,
          light && styles.light,
          inverse && styles.inverse,
        )}
      >
        {children}
      </span>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  light: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  inverse: PropTypes.bool,
};

export default withStyles(({
  color,
  fontWeight,
  size,
  lineHeight,
}) => ({
  default: {
    color: color.default,
    fontSize: size.md,
    lineHeight: lineHeight.md,
    fontWeight: fontWeight.normal,
  },
  xlarge: {
    fontSize: size.xg,
    lineHeight: lineHeight.xg,
  },
  large: {
    fontSize: size.lg,
    lineHeight: lineHeight.lg,
  },
  small: {
    fontSize: size.sm,
    lineHeight: lineHeight.sm,
  },
  xsmall: {
    fontSize: size.xs,
    lineHeight: lineHeight.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
  light: {
    fontWeight: fontWeight.light,
  },
  bold: {
    fontWeight: fontWeight.bold,
  },
  inverse: {
    color: color.white,
  },
}))(Text);