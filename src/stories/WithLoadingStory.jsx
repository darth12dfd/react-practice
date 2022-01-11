//5-2. 하이어오더 컴포넌트 기초 개념 공부하기

//04-6. 스토리 북에 추가하겨 서로 다른 로딩 메시지 출력하기

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withLoading from '../05/withLoading';

const TextWithLoading = withLoading('로딩 중')(Text);//이중 커링 구조의 하이어오더 컴포넌트를 사용할 때 로딩 상태를 표시하는 메시지를 인자로 전달하여 실행한다.
const ButtonWithLoading = withLoading(<Button disabled>로딩중...</Button>)(Button);//로딩 상태 메시지를 버튼 형태의 JSX로 출력하도록 노드를 전달한다.

storiesOf('WithLoading',module)
    .addWithJSX('기본 설정',() => (
        <div>
            <ButtonWithLoading>안녕하세요</ButtonWithLoading>
            <TextWithLoading>안녕하세요</TextWithLoading>
        </div>
    ))  
    .addWithJSX('isLoading 예제', () => (
        <div>
          <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
          <TextWithLoading isLoading>안녕하세요</TextWithLoading>
        </div>
    ));