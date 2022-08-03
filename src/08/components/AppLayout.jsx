//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-1. 앱 전체 화면 구성하기

///08-3-1-2. AppLayout 컴포넌트 만들기

/*
    AppLayout 컴포넌트는 AppNav 컴포넌트의 높이만큼 margin을 지정하여 출력하고, 본문은 자식 프로퍼티를 출력한다. 자식 프로퍼티에는 이후 만들게 될 상단 정보 화면과 하당 정보 화면이 출력될 예정이다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from '../../doit-ui/withStyles';
import AppNav, { HEIGHT } from './AppNav';

class AppLayout extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <AppNav />
        <div {...css(styles.body)}>{children}</div>
      </div>
    );
  }
}

AppLayout.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ unit }) => ({
  wrapper: {
    marginTop: HEIGHT,
  },
  body: {
    padding: unit * 4,
  },
}))(AppLayout);
