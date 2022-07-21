//13-3. 서버사이드 랜더링 도입하기

//13-3-5. IndexDocument 컴포넌트 추가하기

/*
    next.js는 기본 주소(/)에 접속하면 pages 폴더의 index.js를 읽어 화면을 구성한다. 기본 주소에 접속하면 보여줄 IndexDocument 컴포넌트를 추가한다.
    IndexDocument 컴포넌트는 MainPage 컴포넌트를 출력한다.
*/

import React, { PureComponent } from 'react';
import MainPage from '../src/08/components/main/MainPage';

class IndexDocument extends PureComponent {
    render(){
        return <MainPage />;
    }
}

export default IndexDocument;