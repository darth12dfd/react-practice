//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/

//09-3-1. 액션, 리듀서, 스토어 만들기

///09-3-1-2. 리듀서 구성하기

/*
    거래 목록 정보를 그래프 DB 구조로 저장한다.
*/

import { LOADING_TRANSACTION_LIST, SET_TRANSACTION_LIST, SET_ERROR, } from "../actions/transactionActions";
import { handle } from "redux-pack";
import { FETCH_TRANSACTION_LIST } from "../actions/transactionPackActions";

const initState = {
    ids: [],
    entities: {},
    loading: false,//state 초깃값에 loading을 추가한다.
    hasError: false,
};

export default ( state = initState, action) => {
    const { type, payload } = action;

    ////10-3-1-2. 로딩 상태 저장하도록 리듀서 변경하기
    switch(type){
        case SET_ERROR: {
            const { errorMessage } = payload;
            return{
                ...state,
                loading: false,
                hasError: true,
                errorMessage,
            }
        }

        case LOADING_TRANSACTION_LIST: {
            return {
                ...state,
                loading: true,//LOADING_TRANSACTION_LIST 액션이 들어오면 loading을 true로 변경한다.
                hasError: false,
            }
        }

        case SET_TRANSACTION_LIST: {
            const ids = payload.map(entity => entity['id']);
            const entities = payload.reduce((finalEntities, entity) => ({
                ...finalEntities,
                [entity['id']]: entity,
            }), {});
            return { ...state, ids, entities, loading: false, hasError: false };//기존의 SET_TRANSACTION_LIST 액션이 들어오면 loading을 false로 변경한다.
        }

        //11-1-1-4. 리듀서 수정하기

        /*
            액션에 대응하는 리듀서 코드를 수정한다. handle() 함수 세번째 인자에 각 상태에 대한 처리 과정이 구현되어 있다.
        */

        case FETCH_TRANSACTION_LIST: {
            return handle(state, action, {
                // case LOADING_TRANSACTION_LIST 와 동일
                start: prevState => ({
                  ...prevState,
                  loading: true,
                  hasError: false,
                }),
                // case SET_TRANSACTION_LIST 과 동일
                success: prevState => {
                  const { data } = payload;
                  const ids = data.map(entity => entity['id']);
                  const entities = data.reduce(
                      (finalEntities, entity) => ({
                          ...finalEntities,
                          [entity['id']]: entity
                      }),
                      {}
                  );
                  return {
                      ...prevState,
                      ids,
                      entities,
                      loading: false,
                      hasError: false,
                  };
                },
                // case SET_ERROR 와 동일
                failure: prevState => {
                  const { errorMessage } = payload.response.data;
                  return{
                      ...prevState,
                      loading: false,
                      hasError: true,
                      errorMessage,
                  }
                },
              });
        }
        default:
            return state;
    }
};

/*
    리듀서의 코드를 보면 오류 상태를 표시하기 위한 hasError 가 추가되었으며, 각 액션에서 hasError를 적절히 바꾸도록 코드를 구성한다.

    SET_ERROR 액션 type에는 에러 메시지를 출력하기 위한 errorMessage도 추가한다.
*/