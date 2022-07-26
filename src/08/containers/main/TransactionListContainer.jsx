//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/

//09-3-2. 데이터 컴포넌트 추가하기

///09-3-2-1. 데이터 컴포넌트 작성하기

/*
    containers 폴더에 컴포넌트와 동일한 방법을 폴더를 추가하여 데이터 컴포넌트를 관리한다.
*/

import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
//import { setTransactionList } from '../../actions/transactionActions';
//import { requestTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionPackActions';
import {
  transactionListSelector,
  transactionListLoadingStateSelector,
} from '../../selectors/transactionSelectors';

/*
const mapStateToProps = state => {
    const { ids, entities, loadingState } = state.transactions;
    const loading = loadingState[FETCH_TRANSACTION_LIST];
    const transactions = ids.map(id => entities[id]);

    return { transactions, loading };
};
*/

const mapStateToProps = (state) => ({
  transactions: transactionListSelector(state),
  loading: transactionListLoadingStateSelector(state),
});

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
