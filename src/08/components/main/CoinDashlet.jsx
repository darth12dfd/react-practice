//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-2. 상단 정보 화면 구성하기

/*
    상단 정보 화면은 CoinOverview 컴포넌트, CoinDashlet 컴포넌트로 구성한다. 각 컴포넌트는 공용 컴포넌트를 활용한다.

    또한 코인 동향에 배치할 CoinDashlet 컴포넌트는 가로로 배치한다.
*/

///08-3-2-1. CoinDashlet 컴포넌트 만들기

import React , { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../doit-ui/Heading';
import Button from '../../../doit-ui/Button';
import Card from '../../../doit-ui/Card';
import InlineList from '../../../doit-ui/InlineList';
import Text from '../../../doit-ui/Text';

class CoinDashlet extends PureComponent {
    render(){
        const { name, priceLabel } = this.props;
        return(
            <Card vertical={4} horizontal={4}>
                <Heading level={4}>
                    {name}
                    <Text>{priceLabel}</Text>
                </Heading>
                <InlineList spacingBetween={1}>
                    <Button primary small>
                        매도
                    </Button>
                    <Button small>매수</Button>
                </InlineList>
            </Card>
        );
    }
}

CoinDashlet.propTypes = {
    name: PropTypes.string,
    priceLabel: PropTypes.string,
};

export default CoinDashlet;