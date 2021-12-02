//04-3 스타일 컴포넌트 만들기

//react-with-styles로 스타일을 적용한 Button 컴포넌트 만들기

//3. Button 컴포넌트 스토리 예제 추가하기

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';

storiesOf('Button', module)
  .addWithJSX('기본 설정', () => <Button>전송하기</Button>)
  .addWithJSX('large 예제', () => <Button large>전송하기</Button>)
  .addWithJSX('xlarge 예제', () => <Button xlarge>전송하기</Button>)
  .addWithJSX('small 예제', () => <Button small>전송하기</Button>)
  .addWithJSX('xsmall 예제', () => <Button xsmall>전송하기</Button>)
  .addWithJSX('primary 예제', () => <Button primary>전송하기</Button>)
  .addWithJSX('secondary 예제', () => <Button secondary>전송하기</Button>)
  .addWithJSX('primary와 large와 함꼐 쓰는 예제', () => (
    <Button primary large>
      전송하기
    </Button>
  ));
