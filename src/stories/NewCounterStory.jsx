//04-1 비주얼 테스트로 더 쉽게 개발하기

//스토리 추가하기
import React from 'react';
import { storiesOf } from '@storybook/react';

import NewCounter from '../03/NewCounter';

storiesOf('NewCounter', module).add('기본 설정', () => <NewCounter count={0} />);
