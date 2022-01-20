//06-4. 컨텍스트로 모달 만들기

///6-4-3. ModalProvider 생성 함수로 다양한 모달 구성하기

////6-4-3-4. 모달 본문 목록(ContentMap) 구성하기

/*
    CONTENT_MAP에 컴포넌트를 구분하기 위한 키와 키값을 담아 6-4-3-2에서 작성한 createModalProvider() 함수에 전달하여 익스포트한다.
*/

import createModalProvider from './createModalProvider';
import DeleteModalContent from './DeleteModalContent';
import CreateMemberModalContent from './CreateMemberModalContent';

export const CONFIRM_DELETE_MODAL = 'confirm_delete_modal';
export const CREATE_MEMBER_MODAL = 'create_member_modal';

const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
  [CREATE_MEMBER_MODAL]: CreateMemberModalContent,
};

export default createModalProvider(CONTENT_MAP);

