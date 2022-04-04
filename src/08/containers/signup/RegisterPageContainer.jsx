//11-5. 회원 가입 기능 추가하며 마무리하기

///11-5-6. RegisterPageContainer 컴포넌트 생성하기

/*
    스토어 데이터와 액션을 RegisterPage 컴포넌트와 연결하기 위해 데이터 컴포넌트를 추가한다.
*/

import { connect } from "react-redux";
import RegisterPage from "../../components/signup/RegisterPage";
import { createUser } from "../../actions/userActions";
import { userCreateLoadingStateSelector } from "../../selectors/userSelectors";

export default connect(
    state => ({
        loading: userCreateLoadingStateSelector(state),
    }),
    { createUser },
)(RegisterPage);