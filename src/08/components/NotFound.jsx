//12-1. 리액트 라우터 구성하기

///12-1-2. Switch 컴포넌트 사용하기

/*
    많은 사이트들은 사용자가 올바르지 않은 주소에 접속하면 오류 화면을 출력해준다. 이런 기능을 구현하려면 Switch 컴포넌트와 Route 컴포넌트를 함께 사용하면 된다. Switch 컴포넌트는 하위에 배치한 여러 Route 컴포넌트 중 가장 먼저 path가 일치하는 컴포넌트 하나를 출력하도록 만들어준다.
*/

///12-1-2-1.NotFound 컴포넌트 작성하기

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Text from '../../doit-ui/Text';
import Spacing from '../../doit-ui/Spacing';

class NotFound extends PureComponent{
    render(){
        const { url } = this.props.match || {};
        return(
            <React.Fragment>
                <Spacing bottom = {2}>
                    <Text xlarge>
                        {url} 페이지를 찾을 수 없습니다.
                    </Text>
                </Spacing>
                <Link to="/">
                    메인 페이지로 이동
                </Link>
            </React.Fragment>
        );
    }
}

export default NotFound;