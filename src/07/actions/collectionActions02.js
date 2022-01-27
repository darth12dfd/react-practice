//7-3. 그래프 데이터베이스 도입하기

///7-3-3. 그래프 DB 수정하기

////7-3-3-1. 그래프 DB 수정에 대한 액션 추가하기

export const SET_AGE = 'collection/SET_AGE';

export const setAge = (id, age) => ({
  type: SET_AGE,
  payload: { id, age },
});