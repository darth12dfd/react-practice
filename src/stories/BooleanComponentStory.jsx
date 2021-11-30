//04-1 비주얼 테스트로 더 쉽게 개발하기

//스토리가 자동으로 스토리북에 추가되는지 확인해보기

import React from 'react';
import { storiesOf } from '@storybook/react';

import BooleanComponent from '../03/BooleanComponent';

storiesOf('BooleanComponent', module)
  .add('기본 설정', () => <BooleanComponent />)
  .add('bored 설정', () => <BooleanComponent bored />);
