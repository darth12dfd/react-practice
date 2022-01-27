//7-5. 검색 기능 만들면서 리덕스 복습하기

///7-5-1. 검색을 위한 검색 입력 항목 저장하기

///7-5-1-1. 액션 구성하기

/*
    검색 단어를 저장하려면 '검색 단어를 저장하는 액션'부터 구성해야한다. payload에는 검색하고자 하는 항목(filterName)과 검색값(value)을 전달한다.
    검색 단어를 초기화해주는 초기화 액션도 추가한다.
*/

export const SET_FILTER = 'searchFilter/SET_FILTER';
export const RESET_FILTER = 'searchFilter/RESET_FILTER';

export const setFilter = (filterName, value) => ({//filterName은 검색 항목의 이름에 해당하고 value는 검색값에 해당한다. 예를 들어 나이를 검색하는 경우 filterName은 age일 것이고, value는 실제 입력한 숫자일 것이다.
    type:SET_FILTER,
    payload: {
        filterName,
        value,
    },
});

export const resetFilter = () => ({
    type: RESET_FILTER,
  });
  
  export const setNameFilter = name => setFilter('name', name);
  export const setAgeFilter = age => setFilter('age', age);
  export const setIdFilter = id => setFilter('id', id);