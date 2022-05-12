//10-5. 코인 거래 알림 효과 추가하며 마무리하기

/*
    코인 거래 기능에 오류 메시지 뿐 아니라 코인 거래 처리 과정을 알려주는 메시지를 알림창에 표시한ㄷ. 
*/

///10-5-1. 코인 거래 처리 과정 메시지 알림창에 표시하기

////10-5-1-3. 데이터 컴포넌트 교체하고 모달 본문 변경하기

import { connect } from "react-redux";
import TradeCoinPage from '../../components/main/TradeCoinPage';
//import { createTransaction } from '../../actions/transactionActions';
import { createTransaction, CREATE_TRANSACTION } from '../../actions/transactionPackActions';

const mapStateToProps = state => {
    const { loadingState } = state.transactions;
    const loading = loadingState[CREATE_TRANSACTION];
    return { loading }
}

export default connect(mapStateToProps, { createTransaction })(TradeCoinPage);