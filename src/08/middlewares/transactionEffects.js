//10-5. 코인 거래 알림 효과 추가하며 마무리하기

/*
    코인 거래 기능에 오류 메시지 뿐 아니라 코인 거래 처리 과정을 알려주는 메시지를 알림창에 표시한ㄷ. 
*/

///10-5-1. 코인 거래 처리 과정 메시지 알림창에 표시하기

////10-5-1-5. 데이터 컴포넌트 교체하고 모달 본문 변경하기

import {
    TRADE_COMPLETE,
    requestTransactionList,
} from '../actions/transactionActions';
import { showMessage } from '../actions/notificationActions';

export default store => nextRunner => action => {
    const { type, payload } = action;
    const result = nextRunner(action);
    if( type === TRADE_COMPLETE){
        const message = '거래 목록을 최신 정보로 업데이트하였습니다.';
        store.dispatch(showMessage(message));//알림 액션 함수를 출력하여 성공 메시지를 출력한다.
        store.dispatch(requestTransactionList());//requestTransactionList() 액션 함수를 호출하여 새로운 거래 목록을 요청한다.
    }

    return result;
};