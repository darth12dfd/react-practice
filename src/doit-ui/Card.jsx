//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-4. 화면 출력을 위한 컴포넌트 만들기

///08-2-4-4. Card 컴포넌트 만들기

/*
    코인 거래소의 버튼이나 검색창이 들어가는 모든 곳에 Card 컴포넌트를 사용한다. Card 컴포넌트는 둥근 모서리의 박스에 입체감을 주기 위한 그림자를 포함한다.

    코드를 보면 borderRadius가 둥근 모서리를, depth.level1이 그림자를 표현한 부분이다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';
import Spacing, { propTypes as spacingPropTypes } from './Spacing';

class Card extends PureComponent {
  render() {
    const { children, styles, ...spacingProps } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <Spacing {...spacingProps}>
          {children}
        </Spacing>
      </div>
    );
  }
}

Card.propTypes = {
  ...spacingPropTypes,
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ depth, unit, color }) => ({
  wrapper: {
    ...depth.level1,
    borderRadius: unit,
    backgroundColor: color.white,
    display: 'flex',
    overflow: 'hidden',
    marginBottom: unit * 4,
  },
}))(Card);