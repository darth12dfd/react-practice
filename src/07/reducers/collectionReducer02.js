//7-3. 그래프 데이터베이스 도입하기

///7-3-1. 객체 배열 형태의 자료를 스토어에 저장하도록 앱 수정하기

////7-3-1-4. reduce() 함수로 객체 배열 자료를 객체 형태로 변환한다.

/*
    reduce() 함수를 사용하여 객체 배열을 해시맵 형태의 객체로 변환한다.

    데이터가 저장되는 순서를 ids에 저장하기 위해 map() 함수를 이용하여 배열 객체의 id 값을 추출한다.

    실제 데이터는 reduce() g함수를 사용하여 객체로 변환한 다음 entities에 저장하며, 객체의 키로 entity['id']를 사용한다.
*/

import { SET_COLLECTION } from '../actions/collectionActions01';

const initState = {
    ids: [],
    entities: [],
};

export default (state = initState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_COLLECTION: {
            //payload의 하위에 ids에 entites를 저장한다.

            const ids = payload.map(entity => entity['id']);
            const entities = payload.reduce((finalEntities,entity) => ({
                ...finalEntities,
                [entity['id']]: entity,
            }), {});
            return { ...state, ids, entities };
        }

        default:
            return state;
    }
};