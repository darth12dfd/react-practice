//6-5. 입력 폼 만들며 컨텍스트 복습하기

/*
    입력 폼은 리액트 앱을 만들 때 가장 자주 사용하는 요소이다. 컨텍스트를 사용하면 입력 폼의 입력값 관리와 유효성 검사를 손쉽게 할 수 있다.
*/

///6-5-1. 컨텍스트 파일 만들기

/*
    순환 참조 문제를 피하기 위해 컨텍스트 파일을 따로 만든다.
*/

import React from 'react';
export const { Provider, Consumer } = React.createContext({});