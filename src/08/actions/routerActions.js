//12-3. 주소와 리덕스 연결하기

//12-3-1. 가상 코인 거래소의 검색 결과 화면 공유하기

//12-3-1-1. 액션 추가하기

export const SET_LOCATION = 'router/SET_LOCATION';

export function setLocation(location){
    return{
        type: SET_LOCATION,
        payload: { location },
    }
}