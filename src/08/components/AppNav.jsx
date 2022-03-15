//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-1. 앱 전체 화면 구성하기

/*
    앱 전체 화면은 AppLayout 컴포넌트, 상단 메뉴는 AppNav 컴포넌트, 본문은 자식 프로퍼티로 구성한다. 
*/

///08-3-1-1. AppNav 컴포넌트 만들기

/*
    AppNav 컴포넌트에는 가상 코인 거래소의 이름과 회원 가입 버튼이 있다.
*/

import React, { PureComponent } from 'react';
import { withStyles, css, withStylesPropTypes } from '../../doit-ui/withStyles';
import Heading from '../../doit-ui/Heading';
import Text from '../../doit-ui/Text';

export const HEIGHT = 64;

class AppNav extends PureComponent {
    render(){
        const { styles } = this.props;
        return(
            <div {...css(styles.wrapper)}>
                <div {...css(styles.container)}>
                    <Heading level = {3} inverse >두잇 코인 거래소</Heading>
                    <Text inverse bold large>
                        회원 가입
                    </Text>
                </div>
            </div>
        );
    }
}

AppNav.propTypes ={
    ...withStylesPropTypes,
};

export default withStyles(({ color, depth, unit }) => ({
    wrapper: {
        ...depth.level1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        postition: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: HEIGHT - 4,
        backgroundColor: color.primary,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: unit * 2,
        paddingRight: unit * 2,
    },
}))(AppNav);
