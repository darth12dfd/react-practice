//06-4. 컨텍스트로 모달 만들기

/*
    모달이란 배경이 어두워지면서 나타나는 알림창을 말한다.
*/

///6-4-1. 모달 컴포넌트 기본 구조 만들기

////6-4-1-1. 모달 박스와 반투명 배경 만들기

import React, { PureComponent } from "react";
import  withStyles, { css } from '../04/withStyles';

class Modal extends PureComponent {
    render(){
        const { styles, children } = this.props;
        return(
            <div {...css(styles.overlay)}>
                <div {...css(styles.wrapper)}>
                    <div {...css(styles.container)}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(({ color, unit }) => ({
    overlay: {//반투명 배경
        position: 'fixed',
        zIndex: 9999,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    
    wrapper: {//모달 박스
        verticalAlign: 'middle',
    },
    container: {//내용 컨테이너
        margin: '40px auto 0px',
        padding: unit * 4,
        backgroundColor: color.white,
        width: 400,
    },
}))(Modal);