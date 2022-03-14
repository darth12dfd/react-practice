//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-2. 플렉스 박스로 가로 배치를 위한 레이아웃 컴포넌트 만들기

///08-2-2-2. 가로 배치를 위한 컴포넌트 작성하기

/*
    가로 배치를 위한 InlineList 컴포넌트를 작성한다. InlineList 컴포넌트의 하위 요소들은 모두 가로로 배치된다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';
import { unit } from './Theme';

class InlineList extends PureComponent{
    render(){
        const { align, children, styles, spacingBetween, verticalAlign } = this.props;

        return(
            <div
                {...css(
                    styles.wrapper,
                    align === 'center' && styles.alignCenter,
                    align === 'right' && styles.alignRight,
                    verticalAlign === 'top' && styles.verticalAlignTop,
                    verticalAlign === 'bottom' && styles.verticalAlignBottom,
                )}
            >
                {React.Children.map(children, child => (
                    <div { ...css({marginRight: spacingBetween * unit })}>{child}</div>
                ))}
            </div>
        );
    }
}

InlineList.propTypes = {
    ...withStylesPropTypes,
    align: PropTypes.oneOf([ 'left', 'center', 'right' ]),
    verticalAlign: PropTypes.oneOf(['top','middle','bottom']),
    spacingBetween: PropTypes.number,
    children: PropTypes.node,
};

InlineList.defaultProps ={
    spacingBetween: 1,
};

export default withStyles(() => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flext-start',
        alignItems: 'center',
    },
    alignCenter: {
        justifyContent: 'center',
    },
    alignRight: {
        justifyContent: 'flex-end',
    },
    verticalAlignTop: {
        alignItems: 'flex-start',
    },
    verticalAlignBottom: {
        alignItems: 'flex-end',
    },
}))(InlineList);
