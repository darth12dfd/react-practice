//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-3. 하단 정보 화면 구성하기

/*
    하단 정보 화면은 TransactionList 컴포넌트, TransactionSearchFilter 컴포넌트, TransactionTable 컴포넌트로 구성한다. 여기서도 공용 컴포넌트를 활용한다.
*/

///08-3-3-3. TransactionList 컴포넌트 만들기

/*
    TransactionList 컴포넌트에 이전 과정에서 작성한 컴포넌트를 Card 컴포넌트에 담아 배치한다. 검색 결과를 확인하기 위해, state에 임의의 transactions 배열을 정의하여 프로퍼티로 전달한다.

    여기서 편의상 state 초깃값은 constructor 밖에 선언했다.
*/

import React, { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
    state = {
        transactions: [
            {
                id: 'btx_01',
                name: '비트코인(BTX)',
                totalPrice: '123,123,000,000원',
                currentPrice: '4,200,000원',
                datetime:'2019/01/20 08:23:22',
            }
        ],
    }

    render() {
        const { transactions } = this.state;
        return (
            <div>
                <Heading level={3}>거래 현황</Heading>
                <Card vertical={4} horizontal={4}>
                    <TransactionSearchFilter />
                </Card>
                <Card>
                    <TransactionTable transactions={transactions} />
                </Card>
            </div>
        );
    }
}

export default TransactionList;