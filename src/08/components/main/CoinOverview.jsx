//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-2. 상단 정보 화면 구성하기

/*
    상단 정보 화면은 CoinOverview 컴포넌트, CoinDashlet 컴포넌트로 구성한다. 각 컴포넌트는 공용 컴포넌트를 활용한다.

    또한 코인 동향에 배치할 CoinDashlet 컴포넌트는 가로로 배치한다.
*/

///08-3-2-2. CoinOverview 컴포넌트 만들기

/*
    CoinOverview 컴포넌트에는 CoinDashlet 컴포넌트를 배치한다. 이때 InlineList 컴포넌트로 CoinDashlet 컴포넌트를 가로로 배치한다.
*/

import React , { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import InlineList from '../../../doit-ui/InlineList';

import CoinDashlet from './CoinDashlet';

class CoinOverview extends PureComponent {
    render(){
        return(
            <React.Fragment>
                <Heading level = { 3 }>코인 동향</Heading>
                <InlineList>
                    <CoinDashlet name = "비트코인" priceLabel = "4,216,000원" />
                    <CoinDashlet name = "이더리움" priceLabel = "216,000원" />
                    <CoinDashlet name = "두잇코인" priceLabel = "30,000원" />
                </InlineList>
            </React.Fragment>
        );
    }
}

export default CoinOverview;