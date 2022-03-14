//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-3. 공간을 만들어주는 컴포넌트 만들기

/*
    보통 웹 개발 과정에서 요소와 요소 사이에 공간이 필요하면 스타일로 해결한다.

    하지만 리액트 개발에서는 공간을 위한 컴포넌트를 프로퍼티로 전달하여 컴포넌트와 컴포넌트 사이의 공간을 규격화하여 구성할 수 있다.
*/

///08-2-3-1. 공간을 만들어주는 컴포넌트 만들기

import React , { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from './withStyles';
import { unit } from './Theme';

export const propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottm: PropTypes.number,
    vertical: PropTypes.number,
    horizontal: PropTypes.number,
};

class Spacing extends PureComponent {
    render(){
        const{
            children,
            top,
            left,
            right,
            bottom,
            vertical,
            horizontal
        } = this.props;

        //Spacing 컴포넌트에 간격을 따로 설정하는 top, bottom, left, right 프로퍼티 또는 상하, 좌우 간격을 동일하게 설정하는 horizontal, vertical 프로퍼티를 computedTop, computedBottm, computedLeft, computedRight에 저장한다.
        const computedTop = top ? top : vertical;
        const computedBottom = bottom ? bottom : vertical;
        const computedLeft = left ? left : horizontal;
        const computedRight = right ? right: horizontal;

        const computedStyles = {
            flex: 1,//크기를 일정한 비율로 늘리는 데 도움을 준다. flex의 값이 1이면 하위 요소가 동일한 비율로 채워진다.
            ...(computedTop && { marginTop: computedTop * unit }),//computedTop에 값이 있으면 {marginTop: computedTop ( unit )}를 computedStyles 객체에 추가한다.
            ...(computedBottom && { marginBottom: computedBottom * unit }),
            ...(computedLeft && { marginLeft: computedLeft * unit }),
            ...(computedRight && { marginRight: computedRight * unit }),
        };

        return <div { ...css(computedStyles)}>{children}</div>;
    }
}

Spacing.propTypes = propTypes;

export default Spacing;