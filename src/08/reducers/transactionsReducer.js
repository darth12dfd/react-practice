//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/

//09-3-1. 액션, 리듀서, 스토어 만들기

///09-3-1-2. 리듀서 구성하기

/*
    거래 목록 정보를 그래프 DB 구조로 저장한다.
*/

import { SET_TRANSACTION_LIST } from "../actions/transactionActions";

const initState = {
    ids: [],
    entities: {},
};

export default ( state = initState, action) => {
    const { type, payload } = action;

    switch(type){
        case SET_TRANSACTION_LIST: {
            const ids = payload.map(entity => entity['id']);
            const entities = payload.reduce((finalEntities, entity) => ({
                ...finalEntities,
                [entity['id']]: entity,
            }), {});
            return { ...state, ids, entities };
        }
        default:
            return state;
    }
};