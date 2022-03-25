//10-3. 서버 지연 처리와 오류 표시하기

///10-3-2. 오류 발생 알려주기

/*
    오류가 발생했음을 알려주는 화면을 출력해본다.
*/

///10-3-2-8. Notification 컴포넌트 만들기

/*
    오류 메시지를 출력하도록 Notification 컴포넌트를 만들어본다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Toast from '../../../doit-ui/Toast';

class Notification extends PureComponent {
    render(){
        const { hasError, errorMessage } = this.props;
        return hasError && (
            <Toast message = {errorMessage} warning />
        );
    }
}

Notification.propTypes = {
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
};

export default Notification;