//06-4. 컨텍스트로 모달 만들기

///6-4-3. ModalProvider 생성 함수로 다양한 모달 구성하기

////6-4-3-3. 삭제 컴포넌트 구현하기

/*
    이제 컴포넌트 목록에 전달할 삭제 컴포넌트를 구현해본다. 삭제 컴포넌트는 모달 박스에 삭제와 연관된 요소를 채워줄 것이다.

    이 컴포넌트가 6-4-3-2의 ContentMap의 목록 중 하나가 된다.
*/

import React from 'react';
import { Consumer } from './ModalContext';
import Button from '../04/Button';
import Text from '../04/Text';

export default function DeleteModalContent({ id, name }) {
  return (
    <Consumer>
      {({ closeModal }) => (
        <div>
          <div>
            <Text>
              {name}을 정말로 삭제 하시겠습니까?
            </Text>
          </div>
          <Button primary>예</Button>
          <Button onPress={closeModal}>닫기</Button>
        </div>
      )}
    </Consumer>
  );
}