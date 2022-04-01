//11-2. 대용량 데이터 효율적으로 처리하기

///11-2-3. 리덕스에 검색 정보 저장하기

/*
    리덕스에 검색 정보를 저장하려면 검색 정보를 위한 액션과 리듀서를 새로 추가하고, 데이터 컴포넌트와 화면 컴포넌트를 구성해야 한다.
*/

////11-2-3-1. 액션과 리듀서 추가하기

export const SET_FILTER = 'searchFilter/SET_FILTER';

export function setFilter(params){
    return{
        type: SET_FILTER,
        payload: { params },
    }
}

