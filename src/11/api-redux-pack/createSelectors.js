//11-4. axios 호출 작업 모듈화하기

/*
    지금까지 액션과 리듀서를 변경하거나 그래프 DB 구조를 변경하여 서버에서 받아온 데이터를 효율적으로 관리하는 방법에 대해 공부했다.

    지금까지는 거래 정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있다. 이런 것들을 다시 리덕스로 처리하려면 또 다시 액션, 리듀서 ,셀렉트, 리셀렉트 등을 작성해야 한다.

    여기서는 axios 호출 작업을 모듈화하며 회원 정보에 대한 로딩 상태와 알림 표시를 도일하게 처리할 수 있도록 만들어본다.
*/

///11-4-3. 셀렉터 모듈화하기

///11-4-3-1. 셀렉터 생성 함수 생성하기

/*
    셀렉터 함수 역시 커링 패턴을 사용하여 셀렉터 생성 함수를 만든다. paginationSelector, updateLoadingStateSelector, memberLoadingStateSelector가 추가된 점 이외에는 transactionSelectors와 유사한 구조이다.
*/

import { createSelector } from 'reselect';
import { CREATE, UPDATE, FETCH_LIST, FETCH } from './actionTypes';

export default function createSelectors(resourceName) {
    const resourceSelector = state => state[resourceName];
    const entitiesSelector = state => resourceSelector(state).entities;
    const collectionSelector = createSelector(
        [resourceSelector],
        ({ ids, entities }) => ids.map(id => entities[id]),
    );

    const loadingStateSelector = state => resourceSelector(state).loadingState;
    const errorStateSelector = state => resourceSelector(state).errorState;

    const collectionLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createLoadingStateSelector = state =>
    loadingStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateLoadingStateSelector = state =>
    loadingStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH}/${resourceName}`];

  const collectionErrorStateSelector = state =>
    errorStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createErrorStateSelector = state =>
    errorStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateErrorStateSelector = state =>
    errorStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberErrorStateSelector = state =>
    errorStateSelector(state)[`${FETCH}/${resourceName}`];

  const paginationSelector = createSelector(
    resourceSelector,
    ({ pagination }) => ({
      number: pagination.number || 0,
      size: pagination.size
    })
  );
  return {
    entitiesSelector,
    collectionSelector,
    collectionLoadingStateSelector,
    collectionErrorStateSelector,
    createLoadingStateSelector,
    createErrorStateSelector,
    updateLoadingStateSelector,
    updateErrorStateSelector,
    memberLoadingStateSelector,
    memberErrorStateSelector,
    paginationSelector,
  };
}