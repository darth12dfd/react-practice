//11-4. axios 호출 작업 모듈화하기

/*
    지금까지 액션과 리듀서를 변경하거나 그래프 DB 구조를 변경하여 서버에서 받아온 데이터를 효율적으로 관리하는 방법에 대해 공부했다.

    지금까지는 거래 정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있다. 이런 것들을 다시 리덕스로 처리하려면 또 다시 액션, 리듀서 ,셀렉트, 리셀렉트 등을 작성해야 한다.

    여기서는 axios 호출 작업을 모듈화하며 회원 정보에 대한 로딩 상태와 알림 표시를 도일하게 처리할 수 있도록 만들어본다.
*/

//11-4-1. 액션 모듈화하기

///11-4-1-2. 액션 묶음 함수 생성하기

/*
    액션 묶음 함수는 커링 패턴을 사용하여 데이터 서버에 요청할 자료를 인자로 전달받아 액션 함수를 반환하도록 구성한다. redux-pack의 비동기 항목과 데이터 호출 함수(Api)를 합쳐 구성해 본다.
*/

import { FETCH_LIST, CREATE, UPDATE, FETCH, RESET } from "./actionTypes";
import Api from '../../08/Api';

export default (resourceName, key = 'id') => ({
    collection: ( params = {}, meta = {}) => ({
        type: FETCH_LIST,
        promise: Api.get(resourceName, { params }),
        meta: {
            ...meta,
            key,
            resourceName,
        },
    }),
    member: ( id, params = {}, meta = {}) => ({
        type: FETCH,
        promise: Api.get(`${resourceName}/${id}`, { params }),
        meta: {
            ...meta,
            key,
            resourceName,
        },
    }),

    create: ( data, params = {}, meta = {}) => ({
        type: CREATE,
        promise: Api.post(resourceName, data, { params }),
        meta: {
            ...meta,
            key,
            resourceName,
        }
    }),
    update: (id, data, params = {}, meta = {}) => ({
        type: UPDATE,
        promise: Api.put(`${resourceName}/${id}`,data, { params }),
        meta: {
            ...meta,
            key,
            resourceName,
        }
    }),
    reset: () => ({
        type: RESET,
        meta: { resourceName },
    }),
});

/*
    meta 항목에 추가된 resourceNamem, key를 주목하라. 이 항목은 리듀서에서 참조할 예쩡이다. resourceName은 스토어 데이터 항목을 각각 리듀서에 분리하여 저장하기 위해 추가했다.
*/