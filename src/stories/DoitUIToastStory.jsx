//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-4. 화면 출력을 위한 컴포넌트 만들기

///08-2-4-7. Toast 컴포넌트 사용해보기

import React from 'react';
import { storiesOf } from '@storybook/react';

import Toast from '../doit-ui/Toast';

storiesOf('Doit-UI/Toast', module)
  .addWithJSX('Toast 예제', () => (
    <Toast message="정상적으로 처리되었습니다." />
  ))
  .addWithJSX('Toast warning 예제', () => (
    <Toast warning message="문제가 발생하였습니다." />
  ));
