//06-4. 컨텍스트로 모달 만들기

///6-4-1. 모달 컴포넌트 기본 구조 만들기

////6-4-1-3. 버튼을 누르면 모달 박스가 나타나도록 만들기

/* 
    [삭제]를 누르면 모달 박스가 나타나도록 코드를 작성한다. showModal이 true인 경우 모달 박스가 출력된다.
*/

import React, { PureComponent } from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import Modal from './Modal';

class ButtonWithModal extends PureComponent {
    constructor(props){
        super(props);

        this.state = { showModal: false };
    }

    render(){
        return(
            <React.Fragment>
                <Button onPress = {() => this.setState({ showModal: true })}>삭제</Button>
                {this.state.showModal && (
                    <Modal>
                        <div>
                            <Text> 정말로 삭제하시겠습니까?</Text>
                        </div>

                        <Button primary>예</Button>
                        <Button onPress = {() => this.setState({ showModal: false })}>닫기</Button>
                    </Modal>
                )}
            </React.Fragment>
        );
    }
}

export default ButtonWithModal;