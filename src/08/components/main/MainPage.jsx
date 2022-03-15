//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-4. 본문 화면 구성하기

/*
    본문 화면은 MainPage 컴포넌트 앞에서 만든 앱 전체 화면, 상단 정보 화면, 하단 정보 화면을 배치한다.
*/

///08-3-4-1. MainPage 컴포넌트 구성하기

/*
    CoinOverview 컴포넌트와 TransactionList 컴포넌트를 React.Fragment 컴포넌트로 묶어 출력한다.
*/

import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
import TransactionList from './TransactionList';

class MainPage extends PureComponent {
    render(){
        return(
            <React.Fragment>
                <CoinOverview />
                <TransactionList />
            </React.Fragment>
        );
    }
} 

export default MainPage;