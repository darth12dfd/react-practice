//06-4. 컨텍스트로 모달 만들기

///6-4-3. ModalProvider 생성 함수로 다양한 모달 구성하기

////6-4-3-7. 회원가입 컴포넌트 만들기

import React, { PureComponent } from 'react';
import { Consumer } from './ModalContext';
import Button from '../04/Button';
import Text from '../04/Text';
import Input from '../03/Input';

class CreateMemberModalContent extends PureComponent {
  render() {
    return (
      <Consumer>
        {({ closeModal }) => (
          <div>
            <div>
              <Text>회원가입</Text>
              <div>
                <Input label="이메일" name="email" />
              </div>
              <div>
                <Input label="이름" name="name" />
              </div>
              <div>
                <Input label="비밀번호" name="password" />
              </div>
            </div>
            <Button primary>가입하기</Button>
            <Button onPress={closeModal}>닫기</Button>
          </div>
        )}
      </Consumer>
    );
  }
}

export default CreateMemberModalContent;