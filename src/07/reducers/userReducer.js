//7-2. 액션과 리듀서의 관계 알아보기

///7-2-5. 리듀서 분리하기

////7-2-5-2. user 관련리듀서 분리하기

import { SET_USER } from '../actions/userActions';

export default function reducer(state = {}, action){
    const { type, payload } = action;
    switch(type) {
        case SET_USER: {
            return { ...state, ...payload };
        }
        default:
            return state;
    }
};