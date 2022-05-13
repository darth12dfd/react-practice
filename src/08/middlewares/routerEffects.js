//12-3. 주소와 리덕스 연결하기

//12-3-3. 주소 변경 액션과 검색 목록 요청 연동하기

/*
    검색 입력 항목 미들웨어를 추가하여 검색 이벽 항목 변경 액션(SET_FILTER)이 호출될 때마다 자동으로 거래 검색 목록을 요청을 하도록 구성했다.

    이제 만약 주소 동기화 액션이 검색 필터 변경 액션을 호출한다면 연쇄적으로 검색 결과를 요청할 수 있다.

    주소 동기화 액션(SET_LOCATION)이 검색 입력 항목 변경 액션(SET_FILTER)을 호출하기만 한다면 자동으로 검색 입력 항목 설정과 함께 검색 요청도 실행되도록 처리할 수 있다.
*/

///12-3-3-1. routerEffetcs 미들웨어 추가하기

import { SET_LOCATION } from "../actions/routerActions";
import { setFilter } from "../actions/searchFilterActions";

function parse(qs){
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    return chunks
        .map((chunk) => chunk.split('='))
        .reduce((result, [key, value]) => ({
            ...result,
            [key]: value,
        }), {} );
}

export default store => nextRunner => action => {
    const { type, payload } = action;
    const result = nextRunner(action);

    if(type === SET_LOCATION){//주소 동기화 액션일 때만 작동.
        const { pathname, search } = payload.location;
        if(pathname === '/'){//MainPage에서만 검색 목록을 포함하기 때문에 경로가 일치할 때만 작동.
            store.dispatch(setFilter(parse(search)));
        }
    }

    return result;
}