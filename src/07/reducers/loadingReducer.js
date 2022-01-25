//7-2. 액션과 리듀서의 관계 알아보기

///7-2-5. 리듀서 분리하기

/*
    ReduxApp03.jsx에서 작성한 리듀서는 하나의 리듀서가 스토어 전체를 관리하도록 구현했다.

    여기서는 리듀서를 데이터 종류에 맞게 분리하는 것이 코드를 효율적으로 관리할 수 있으므로, loading, user 데이터에 따라 액션과 리듀서를 분리한다.
*/

////7-2-5-1. loading 관련리듀서 분리하기
import { SET_LOADING, RESET_LOADING} from '../actions/loadingActions';

const initState = false;

export default function reducer(state = initState, action){
    const { type, payload } = action;
    switch(type) {
        case SET_LOADING: {
            return payload;
        }
        case RESET_LOADING: {
            return initState;
        }
        
        default:
            return state;
    }
};