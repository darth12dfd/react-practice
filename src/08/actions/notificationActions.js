//10-4. 미들웨어로 알림 메시지 띄우기

/*
    10-3에서 만든 데이터 컴포넌트는 transaction 리듀서에서 알림과 깊은 관련이 있는 스토어 데이터만을 참조하여 Notification 컴포넌트와 연결되도록 구성되어 있다.

    여기서 많은 불편함이 생기는데 첫째, transaction 리듀서에 알림에 대한 데이터를 추가하고 이를 개발자가 인지하고 관리해야 하며, 둘째 trnasaction 이외의 데이터를 추가하며 리듀서의 일관성이 무너진다.

    여기서는 '서버 처리에 대한 알림 메시지'를 공통으로 처리하는 액션과 리듀서를 분리하여 만들어 보고 이후 미들웨어를 사용하여 알림을 자동으로 출력하는 기능을 추가한다.
*/

///10-4-1. 알림 액션과 리듀서 분리하기

///10-4-1-1. 알림 액션과 리듀서 생성하기

export const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';

export function showMessage(message, warning = false){
    return {
        type: SHOW_NOTIFICATION,
        payload: { message, warning },
    }
}

export function hideMessage(){
    return{
        type: HIDE_NOTIFICATION,
    }
}