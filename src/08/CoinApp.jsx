//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-1. 앱 전체 화면 구성하기

///08-3-1-3. CoinApp 컴포넌트 만들기

import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';

class CoinApp extends PureComponent {
    render(){
        return (
            <AppLayout>
                <MainPage />
            </AppLayout>
        );
    }
}

export default CoinApp;