//06-4. 컨텍스트로 모달 만들기

///6-4-3. ModalProvider 생성 함수로 다양한 모달 구성하기

/*
    앞에서 구현한 모달 메시지를 살짝 변형하여 다른 모달 본문과 버튼을 구성하는 방법을 알아본다.

    커링을 이용하여 Modal Provder 생성 함수를 만들어본다.
*/

////6-4-3-1. 모달 컨텍스트 생성하기

/*
    ModalProvider 컴포넌트에 포함된 createContext() 함수를 따로 분리한다. 다양한 모달을 구현하면 소비자를 임포트할 일이 많아지는데 createContext() 함수를 분리하면 불필요한 코드 참조를 줄일 수 있다.
*/

import React from 'react';
export const { Provider, Consumer } = React.createContext({});