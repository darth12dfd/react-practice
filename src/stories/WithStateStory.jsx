//05-3. 하이어오더 컴포넌트 라이브러리 사용하기

//2. withState() 함수로 상태 관리와 이벤트 처리하기

//2-2. 스토리북 예제를 추가하여 버튼을 눌렀을 때 카운트 숫자가 변경되는 것을 확인한다.

import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState } from '../05/withState';

storiesOf('WithState',module)
    .addWithJSX('CounterWithCountState', () => <CounterWithCountState />);