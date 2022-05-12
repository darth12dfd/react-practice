//09-4. 가상 코인 거래소에 검색 기능 추가하기

//09-4-2. 검색 결괏값 리덕스에 전달하기

/*
    검색 결과 정보 컴포넌트는 리덕스 스토어와 연결된 하단 정보 컴포넌트로부터 데이터를 전달받기 때문에 스토어의 데이터가 변경되면 검색 결과 정보 컴포넌트에도 반영될 것이다.

    TransactionSearchFilter 컴포넌트를 연결하면 손쉽게 리덕스 스토어를 변경할 수 있다.
*/

///09-4-2-1. TransationSearchFilter 컴포넌트와 데이터 컴포넌트 연결하기

/*

import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { setTransactionList } from '../../actions/transactionActions';

export default connect(null, { setTransactionList })(TransactionSearchFilter);

*/

///10-2-3-7. 데이터 컴포넌트의 액션 함수 교체하고 TransactionSearchFilter 컴포넌트에 적용하기

import { connect } from "react-redux";
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
//import { requestTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions';//11-2-3-2. 데이터 컴포넌트 수정하기

export default connect(null, { requestTransactionList, setFilter })(TransactionSearchFilter);