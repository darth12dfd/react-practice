//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-6. Modal 컴포넌트 만들기

///08-2-6-1. Card 컴포넌트와 함께 둥근 모서리 표현하기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import { css, withStyles } from '../withStyles';

class Modal extends PureComponent {
  render() {
    const { styles, children } = this.props;
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.wrapper)}>
          <div {...css(styles.container)}>
            <Card vertical={2} horizontal={2}>
              {children}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default withStyles(() => ({
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  wrapper: {
    verticalAlign: 'middle',
  },
  container: {
    margin: '40px auto 0px',
    width: 700,
  },
}))(Modal);