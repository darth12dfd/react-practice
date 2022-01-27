//7-5. 검색 기능 만들면서 리덕스 복습하기

///7-5-1. 검색을 위한 검색 입력 항목 저장하기

///7-5-1-2. 리듀서 구현하기

/*
    RESET_FILTER 액션 타입에 대해서는 초깃값 initState를 반환하고, set_FILTER 액션 타입에 대해서는 기존 state에 [filterName]: value를 추가하여 반환하도록 리듀서를 구현한다.
*/

import { SET_FILTER, RESET_FILTER } from '../actions/searchFilterActions';

const initState = {};

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch(type) {
    case SET_FILTER: {
      const { filterName, value } = payload;
      return {
        ...state,
        [filterName]: value,//여러 검색 조건을 조합할 수 있도록 기존의 검색 항목과 새 검색 항목을 객체 형태로 병합한다.
      };
    }
    case RESET_FILTER: {
      return initState;
    }
    default:
      return state;
  }
}