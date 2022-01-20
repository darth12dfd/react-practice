//06-4. 컨텍스트로 모달 만들기

///6-4-2. ModalProvider와 소비자가 연결된 Button 컴포넌트 만들기

/*
    컨텍스트 API를 통해 ModalProvider를 만들고 소비자가 연결된 Button 컴포넌트를 만들어 본다.
*/

//6-4-2-1. ModalProvider 만들기

/*
    아래의 코드는 Modal 컴포넌트를 포함하는 ModalProvider이다. ModalProvider의 value 프로퍼티로 showModal의 값을 변경하기 위한 handlClose(), handleOpen() 함수를 컨텍스트 데이터에 전달한다.
*/

import React, { PureComponent } from 'react';
import Modal from './Modal';
import Button from '../04/Button';
import Text from '../04/Text';

const { Provider, Consumer } = React.createContext({});
export { Consumer };

class ModalProvider extends PureComponent {
    constructor(props){
        super(props);

        this.state = { showModal: false };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleClose(){
        this.setState({ showModal: false });
    }

    handleOpen(){
        this.setState({ showModal: true });
    }

    render(){
        return (
            <Provider value = {{ openModal: this.handleOpen, closeModal: this.handleClose }}>
                {this.props.children}
                {this.state.showModal && (
                    <Modal>
                        <div>
                            <Text>
                                정말로 삭제하시겠습니까?
                            </Text>
                        </div>
                        <Button primary>예</Button>
                        <Button onPress = { () => this.setState({ showModal: false })}>닫기</Button>
                    </Modal>
                )}
            </Provider>
        );
    }
}

export default ModalProvider;

/*
    공급자 아래에 Modal 컴포넌트를 배치하여 showModal의 값에 따라 Modal 컴포넌트가 출력될 수 있도록 만든다.

    {this.props.children}에는 [삭제] 버튼과 같이 소비자와 연결된 요소들이 출력될 것이다.
*/

