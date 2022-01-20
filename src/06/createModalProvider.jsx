//06-4. 컨텍스트로 모달 만들기

///6-4-3. ModalProvider 생성 함수로 다양한 모달 구성하기

////6-4-3-2. ModalProvider 생성 함수 만들기

/*
    다음은 앞에서 구현한 ModalProvider를 이용하여 만든 ModalProvider 생성 함수이다.

    과정 1에서 만든 ModalContext.js 파일을 임포트하여 공급자를 참조한다. 생성 함수 인자 ContentMap에는 모달에 출력할 컴포넌트 목록이 키(contentId)로 구분되어 저장되어 있다.

    예를 들어 PageComponent 컴포넌트를 window1이라는 키에 연결하면 { window1: PageComponent }가 ContentMap에 전달될 것이다.
*/

import React, { PureComponent } from 'react';
import Modal from './Modal';
import { Provider } from './ModalContext';

export default function createModalProvider(ContentMap = {}) {
  return class ModalProvider extends PureComponent {
    constructor(props) {
      super(props);
  
      this.state = { showModal: false };
      this.handleClose = this.handleClose.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen(contentId, modalProps) {
      this.contentId = contentId;
      this.modalProps = modalProps;
      this.setState({ showModal: true });
    }

    handleClose() {
      this.setState({ showModal: false });
    }

    render() {
      const { children } = this.props;
      const { showModal } = this.state;
      const ModalContent = ContentMap[this.contentId];
  
      return (
        <Provider
          value={{
            openModal: this.handleOpen,
            closeModal: this.handleClose,
          }}
        >
          {children}
          {showModal && ModalContent && (
            <Modal>
              <ModalContent {...this.modalProps} />
            </Modal>
          )}
        </Provider>
      );
    }
  };  
}

/*
    위의 코드를 보면 ModalContent에 모달 본문 목록(ContentMap) 중 this.contentId 키에 해당하는 한 개의 컴포넌트만 출력하도록 구현되어 있다.
*/