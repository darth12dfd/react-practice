//7-2. 액션과 리듀서의 관계 알아보기

///7-2-6. 액션 분리하기

////7-2-6-1. loading 액션 분리하기

export const SET_LOADING = 'loading/SET_LOADING';
export const RESET_LOADING = 'loading/RESET_LOADING';

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading,
});

export const resetLoading = () => ({
    type: RESET_LOADING,
});