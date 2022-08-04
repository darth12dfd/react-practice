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
//import Api from '../../Api';

///09-4-2-2. TransactionList 컴포넌트 수정하기
//import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';

import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

///10-2-3-5. 액션 함수로 호출하기

/*
    TransactionList 컴포넌트에서 Api 함수가 아닌 프로퍼티 requestTransactionList() 함수를 호출하도록 수정한다.

    componentDidMount() 함수에서 requestTransactionList() 함수를 호출하도록 코드를 변경한다.

    이렇게 바꿈으로서 서버 데이터 호출 정보를 포함했던 코드가 사라져 간결해졌으며, 거래 목록 정보를 요청하는 Api 코드를 액션에 담아 공유할 수도 있게 되었다.
*/
class TransactionList extends PureComponent {
  /*
    componentDidMount(){
        //Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
        this.props.requestTransactionList();//
    }
    */

  componentDidMount() {}

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
        <TransactionPaginationContainer />
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
