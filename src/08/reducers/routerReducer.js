//12-3. 주소와 리덕스 연결하기

//12-3-1. 가상 코인 거래소의 검색 결과 화면 공유하기

//12-3-1-2. 리듀서 추가하기

import { SET_LOCATION } from "../actions/routerActions";

const initState = {
    location: {},
};

export default (state = initState, action) => {
    const { type, payload } = action;

    switch(type){
        case SET_LOCATION: {
            const { location } = payload;
            return { ...state, location };
        }

        default:
            return state;
    }
}