//04-1 비주얼 테스트로 더 쉽게 개발하기

//스토리북 설치하고 스토리 파일 만들기 및 addon-actions 적용하기
import React from 'react';
import { storiesOf } from '@storybook/react'; //스토리를 스토리북 도구에 추가해주는 storiesOf() 함수를 임포트한다.
import { action } from '@storybook/addon-actions';

import Input from '../03/Input'; //Input 컴포넌트를 임포트했다.

storiesOf('Input', module)
  .addWithJSX('기본 설정', () => <Input name="name" />) //스토리북 도구에 표시할 스토리의 이름(Input)과 메뉴 이름(기본 설정)을 입력한다.
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  .addWithJSX('onChange 예제', () => (
    <Input name="name" onChange={action('onChange 이벤트 발생')} />
  ));
