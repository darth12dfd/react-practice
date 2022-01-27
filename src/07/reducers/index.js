//7-2. 액션과 리듀서의 관계 알아보기

///7-2-5. 리듀서 분리하기

////7-2-5-3. 리듀서 묶어주기

/*
    과정 1~2를 통해 만든 리듀서가 하나처럼 동작하려면 reducer 폴더에 index.js 파일을 추가해야 한다. 각 리듀서를 묶어 익스포트한다.
*/

import loading from './loadingReducer';
import user from './userReducer';
import collection from './collectionReducer';////7-3-3-3. 리듀서 추가하고 그래프 DB 수정 확인하기
import searchFilter from './searchFilterReducer';////7-5-1-3. 리듀서를 스토어에 추가하기

export default {
    collection,
    loading,
    user,
    searchFilter,
};