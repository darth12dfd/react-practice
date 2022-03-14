//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-4. 화면 출력을 위한 컴포넌트 만들기

///08-2-4-6. Toast 컴포넌트 만들기

/*
    Toast 컴포넌트는 실행 결과를 알려주는 역할을 한다. 초록색이나 빨간색 배경으로 메세지의 특성을 표현했다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';
import Spacing from './Spacing';
import Text from './Text';

class Toast extends PureComponent {
    render(){
        const { message, styles, warning } = this.props;

        return (
            <div {...css(styles.overlay)}>
                <div {...css(styles.wrapper, warning && styles.warning)}>
                    <Spacing vertical = {4} horizontal = {8}>
                        {message}
                    </Spacing>
                </div>
            </div>
        );
    }
}

Toast.propTypes = {
    ...withStylesPropTypes,
    warning: PropTypes.bool,
    message: PropTypes.string,
};

export default withStyles(({ depth, unit, color }) => ({
    overlay: {
        postition: 'fixed',
        bottom: 0,
        right: 0,
        margin: unit * 4,
    },
    wrapper: {
        ...depth.level1,
        borderRadius: unit,
        backgroundColor: color.secondary,
        padding: unit * 2,
        marginBottom: unit * 4,
    },
    warning: {
        backgroundColor: color.error,
    }
}))(Toast);
