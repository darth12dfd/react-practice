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

//11-2-5. 여러 데이터 요청 상태를 관리하도록 그래프 DB 구조 변경하기

/*
    기존의 그래프 DB는 거래 목록을 위한 것이다. 그래서 로딩 상태를 위한 loading과 같은 값은 하나만 있어도 괜찮았으나 로딩이 다 같은 로딩이 아니다.

    예를 들어 거래 목록이 로딩될 수 있고, 거래가 생성될 때 로딩될  수도 있다. 이것들을 loading 값 하나로 관랗ㄹ 수는 없다. 또 거래 목록이 추가되는지 수정되는지에 대한 상태 정보도 필요하다. 이를 위해 그래프 DB의 구조를 변경하여 관리하기 용이하도록 한다.
*/

///11-2-5-1. 액션 type에 따라 로딩과 오류 상태 따로 보관하기

import { CREATE_TRANSACTION, FETCH_TRANSACTION_LIST } from "../actions/transactionPackActions"; 

const initState = {
    ids: [],
    entities: {},
    //loading: false,//state 초깃값에 loading을 추가한다.
    //hasError: false,

    loadingState: {
        [CREATE_TRANSACTION]: false,
        [FETCH_TRANSACTION_LIST]: false,
    },

    errorState: {
        [CREATE_TRANSACTION]: false,
        [FETCH_TRANSACTION_LIST]: false,
    },
    pagination: {},//그래프 DB 구조 수정
    pages: {}
};

export default ( state = initState, action) => {
    const { type, payload, meta } = action;

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
        case CREATE_TRANSACTION:
        case FETCH_TRANSACTION_LIST: {
            return handle(state, action, {
                // case LOADING_TRANSACTION_LIST 와 동일
                start: prevState => ({
                  ...prevState,
                  loadingState: {
                      ...prevState.loadingState,
                      [type]: true,
                  },
                  errorState: {
                      ...prevState.errorState,
                      [type]: false,
                  }
                }),
                // case SET_TRANSACTION_LIST 과 동일
                success: prevState => {
                  const { data } = payload;

                  const loadingAndErrorState = {
                      loadingState: {
                          ...prevState.loadingState,
                          [type]: false,
                      },
                      errorState: {
                          ...prevState.errorState,
                          [type]: false,
                      },
                  };

                  if(type === FETCH_TRANSACTION_LIST){
                    const { pageNumber, pageSize } = meta || {};

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
                        ...loadingAndErrorState,
                        ids,
                        entities: { ...prevState.entities, ...entities },
                        pagination: {
                            number: pageNumber,
                            size: pageSize
                        },
                        pages: {
                            ...prevState.pages,
                            [pageNumber]: ids,
                        }
                    };
                  }
                  else {
                      const id = data['id'];
                      return{
                          ...prevState,
                          ...loadingAndErrorState,
                          id,
                          entities: { ...prevState.entities, [id]: data },
                      };
                  }
                },
                // case SET_ERROR 와 동일
                failure: prevState => {
                  const { errorMessage } = payload.response.data;
                  return{
                      ...prevState,
                      loadingState: {
                          ...prevState.loadingState,
                          [type]: false,
                      },
                      errorState: {
                          ...prevState.errorState,
                          [type]: errorMessage || true,//오류 메시지를 포함하지 않을 경우 true를 할당하여 오류가 발생한 상태임을 표시한다.
                      }
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