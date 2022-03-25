//10-3. 서버 지연 처리와 오류 표시하기

///10-3-2. 오류 발생 알려주기

/*
    오류가 발생했음을 알려주는 화면을 출력해본다.
*/

///10-3-2-9. 데이터 컴포넌트 만들기

/*
    오류 메시지와 Notification 컴포넌트를 연결하는 데이터 컴포넌트를 만든다.
*/

import { connect } from "react-redux";
import Notification from "../../components/main/Notification";

const mapStateToProps = state => {
    const { hasError, errorMessage } = state.transactions;
    return { hasError, errorMessage };
};

export default connect(mapStateToProps)(Notification);