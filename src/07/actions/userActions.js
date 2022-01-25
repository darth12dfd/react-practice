//7-2. 액션과 리듀서의 관계 알아보기

///7-2-6. 액션 분리하기

////7-2-6-3. user 액션 분리하고 리듀서, 앱에 수정하기

export const SET_USER = 'user/SET_USER';

export const setUser = user => ({
    type: SET_USER,
    payload: user,
});
