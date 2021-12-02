//04-2 CSS로 컴포넌트 스타일 적용하기

//컴포넌트에 머터리얼 디자인 본격적으로 적용해보기

//2. InputWithStyleStory 스토리 만들어 스토리북에 추가하기

import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
  .addWithJSX('기본 설정', () => <Input name="name" />)
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  .addWithJSX('value 예제', () => <Input name="name" label="이름" value="두잇" />)
  .addWithJSX('errorMessage 예제', () => (
    <Input name="name" label="이름" errorMessage="이름을 입력해주세요" />
  ));
