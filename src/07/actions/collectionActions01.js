//7-3. 그래프 데이터베이스 도입하기

/*
    자바스크립트 내부에는 데이터베이스 시스템이 없기 때문에 리액트 코드에서도 데이터베이스를 도입하기 어렵다.

    이런 경우 그래프 데이터베이스를 활용하는데, 그래프 데이터베이스는 JSON과 같은 형태이므로 배우기도 쉽고 사용도 쉽다.
*/

///7-3-1. 객체 배열 형태의 자료를 스토어에 저장하도록 앱 수정하기

////7-3-1-1. 액션 추가하기

export const SET_COLLECTION = 'collection/SET_COLLECTION';

export const setCollection = collection => ({
    type: SET_COLLECTION,
    payload: collection,
});