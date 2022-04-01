//11-2. 대용량 데이터 효율적으로 처리하기

///11-2-2. 가상 코인 거래소에 페이지 이동 기능 추가하기

////11-2-2-2. TransactionPaginationContainer 컴포넌트 추가하기

/*
    TransactionPagination 컴포넌트에 전달할 액션과 스토어 데이터를 연결한다. 현재 페이저 정보와 목록 요청 액션을 데이터 컴포넌트에 추가한다.
*/

import { connect } from "react-redux";
import TransactionPagination from "../../components/main/TransactionPagination";
import { requestTransactionList, FETCH_TRANSACTION_LIST } from "../../actions/transactionPackActions";

const mapStateToProps = state => {
    const { pagination, loadingState, ids } = state.transactions;

    const loading = loadingState[FETCH_TRANSACTION_LIST];
    const { number, size } = pagination;

    return {
        searchParams: state.searchFilter.params,
        pageNumber: number || 1,
        hasNext: ids.length === size,//결과 목록의 개수가 페이지 크기와 같을 경우 다음 페이지가 존재한다고 가정한다.
        loading,
    };
};

const mapDispatchToProps = {
    requestTransactionList
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);