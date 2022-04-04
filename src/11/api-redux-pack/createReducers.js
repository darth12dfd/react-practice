//11-4. axios 호출 작업 모듈화하기

/*
    지금까지 액션과 리듀서를 변경하거나 그래프 DB 구조를 변경하여 서버에서 받아온 데이터를 효율적으로 관리하는 방법에 대해 공부했다.

    지금까지는 거래 정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있다. 이런 것들을 다시 리덕스로 처리하려면 또 다시 액션, 리듀서 ,셀렉트, 리셀렉트 등을 작성해야 한다.

    여기서는 axios 호출 작업을 모듈화하며 회원 정보에 대한 로딩 상태와 알림 표시를 도일하게 처리할 수 있도록 만들어본다.
*/

//11-4-2. 리듀서 모듈화하기

////11-4-2-1. 리듀서 생성 함수 생성하기

import { handle } from 'redux-pack';
import { CREATE, UPDATE, FETCH, FETCH_LIST, RESET } from './actionTypes';

export default (...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => {
    const initState = {
      ids: [],
      entities: {},
      loadingState: {
        [`${CREATE}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      errorState: {
        [`${CREATE}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      pagination: {},
      pages: {}
    };
    apiReducers[name] = (state = initState, action) => {
      const { type, payload, meta } = action;
      const { resourceName, key } = meta || {};

      if (resourceName !== name) {
        return state;
      }
      switch (type) {
        case CREATE:
        case UPDATE:
        case FETCH:
        case FETCH_LIST: {
          return handle(state, action, {
            start: prevState => ({
              ...prevState,
              loadingState: {
                ...prevState.loadingState,
                [`${type}/${name}`]: true,
              },
              errorState: {
                ...prevState.errorState,
                [`${type}/${name}`]: false,
              },
            }),
            success: prevState => {
              const { data } = payload;
              if (type === FETCH_LIST) {
                const { pageNumber, pageSize } = meta || {};
                const ids = data.map(entity => entity['id']);
                const entities = data.reduce(
                  (finalEntities, entity) => ({
                    ...finalEntities,
                    [entity[key]]: entity
                  }),
                  {}
                );
                return {
                  ...prevState,
                  ids,
                  entities: { ...prevState.entities, ...entities },
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                  pagination: {
                    number: pageNumber,
                    size: pageSize
                  },
                  pages: {
                    ...prevState.pages,
                    [pageNumber]: ids
                  }
                };
              } else {
                const id = data[key];
                return {
                  ...prevState,
                  id,
                  entities: { ...prevState.entities, [id]: data },
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                };
              }
            },
            failure: prevState => {
              const { errorMessage } = payload.response ? payload.response.data : {};
              return {
                ...prevState,
                loadingState: {
                  ...prevState.loadingState,
                  [`${type}/${name}`]: false,
                },
                errorState: {
                  ...prevState.errorState,
                  [`${type}/${name}`]: errorMessage || true,
                },
              };
            }
          });
        }
        case RESET:
          return initState;
        default:
          return state;
      }
    };
    return apiReducers;
  }, {});
};