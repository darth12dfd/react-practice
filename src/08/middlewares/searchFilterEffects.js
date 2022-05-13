//12-3. 주소와 리덕스 연결하기

//12-3-2. 검색 필터 미들웨어 추가하기

///12-3-2-1. 미들웨어 추가하기

import { SET_FILTER } from "../actions/searchFilterActions";
import { requestTransactionList, resetTransactionList } from "../actions/transactionPackActions";

export default store => nextRunner => action => {
    const{ type, payload } = action;
    const result = nextRunner(action);
    if(type === SET_FILTER){
        const { params } = payload || {};
        store.dispatch(resetTransactionList());
        store.dispatch(requestTransactionList(params));
    }

    return result;
}