//10-4. 미들웨어로 알림 메시지 띄우기

/*
    데이터 컴포넌트는 transaction 리듀서에서 알림과 깊은 관련이 있는 스토어 데이터만을 참조하여 Notification 컴포넌트와 연결되도록 구성되어 있다.

    여기서 많은 불편함이 생기는데 첫째, transaction 리듀서에 알림에 대한 데이터를 추가하고 이를 개발자가 인지하고 관리해야 하며, 둘째 trnasaction 이외의 데이터를 추가하며 리듀서의 일관성이 무너진다.

    여기서는 '서버 처리에 대한 알림 메시지'를 공통으로 처리하는 액션과 리듀서를 분리하여 만들어 보고 이후 미들웨어를 사용하여 알림을 자동으로 출력하는 기능을 추가한다.
*/

//10-4-2. 미들웨어로 알림 자동으로 표시하기

/*
    미들웨어의 감시 기능을 활용하면 액션에 액션을 추가할 수 있다.

    예를 들어 SET_ERROR 액션이 실행된 이후 SET_ERROR 액션이 맞다면 알람 액션 함수(showMessage)를 실행하도록 만들 수 있다.

    즉, 이 과정을 통해 거래 목록 요청 액션 함수에서 알림 액션 함수를 생략할 수 있다.

    이런식으로 특정 상황에서 추가 액션을 호출하는 미들웨어를 효과 미들웨어라고 한다.
*/

//10-4-2-1. NotificationEffects 미들웨어 생성하기

/*
    SET_ERROR 액션을 미들웨어에서 처리하도록 구성한다. 이 구성을 통해 추가 액션을 실행할 수 있게 한다.
*/

// import { SET_ERROR } from '../actions/transactionActions';
import { KEY, LIFECYCLE } from 'redux-pack';
// import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';
import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';
import { debounce } from '../../02/debounce';

const debounceRunner = debounce(action => action(), 4000);

// let prevHideCaller;
export default store => nextRunner => action => {
  const { type, payload, meta } = action;
  const result = nextRunner(action);
  if (meta && meta.notification) {
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMessage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      const { errorMessage } = payload.response ? payload.response.data : {};
      store.dispatch(showMessage(errorMessage || error, true));
    }
    // } else if (type === SET_ERROR) {
    //   const { errorMessage } = payload;
    //   store.dispatch(showMessage(errorMessage, true));
    // } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
    //   const { errorMessage } = payload.response.data;
    //   store.dispatch(showMessage(errorMessage, true));
    // } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
    //   const message = '거래 목록을 최신 정보로 업데이트하였습니다.';
    //   store.dispatch(showMessage(message));
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    // setTimeout(hide, 4000);
    debounceRunner(hide);
  }
  return result;
};