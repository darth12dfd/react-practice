//7-4. 데이터를 위한 컴포넌트 알아보기

///7-4-3. 데이터 컴포넌트에 액션 연결하기

/*
    데이터 컴포넌트가 스토어의 데이터를 변경할 수 있도록 만들어 본다. connect() 함수의 두 번째 인자에 해당했던 ampDispatchProps() 함수를 구현하면 데이터 컴포넌트가 스토어의 데이터를 변경할 수 있다.
*/

////7-4-3-1. 화면 컴포넌트 작성하기

/*
    버튼을 추가하여 화면 컴포넌트를 작성한다. 화면 컴포넌트는 리덕스와 연관이 없는 컴포넌트로 setAge 프로퍼티로 전달된 콜백 함수를 호출하도록 구현하면 된다.

    데이터 컴포넌트에서 이 setAge 프로퍼티에 SET_AGE 액션 타입을 호출하는 함수를 전달할 예정이다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';

class ActionComponent extends PureComponent {
    render(){
        const { setAge } = this.props;

        return(
            <React.Fragment>
                <Button onPress ={() => setAge(2,19)}>고유번호 2번 나이 19세로 변경</Button>
            </React.Fragment>
        );
    }
}

ActionComponent.propTypes = {
    setAge: PropTypes.func,
};

export default ActionComponent;
