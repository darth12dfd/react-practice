//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-4. 화면 출력을 위한 컴포넌트 만들기

///08-2-4-3. Text, Heading, 컴포넌트 사용해보기

import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../doit-ui/Text';

storiesOf('Doit-UI/Text', module).addWithJSX('Text 예제', () => (
  <div>
    <Text xlarge>Xlarge</Text>
    <Text xlarge primary>Xlarge primary</Text>
    <Text xlarge secondary>Xlarge secondary</Text>
    <Text xlarge bold>Xlarge bold</Text>
    <Text xlarge light>Xlarge light</Text>
    <br />
    <Text large>Large</Text>
    <Text large primary>Large primary</Text>
    <Text large secondary>Large secondary</Text>
    <Text large bold>Large bold</Text>
    <Text large light>Large light</Text>
    <br />
    <Text>default</Text>
    <Text primary>default primary</Text>
    <Text secondary>default secondary</Text>
    <Text bold>default bold</Text>
    <Text light>default light</Text>
    <br />
    <Text small>small</Text>
    <Text small primary>small primary</Text>
    <Text small secondary>small secondary</Text>
    <Text small bold>Large bold</Text>
    <Text small light>Large light</Text>
    <br />
    <Text xsmall>xsmall</Text>
    <Text xsmall primary>small primary</Text>
    <Text xsmall secondary>small secondary</Text>
    <Text xsmall bold>Large bold</Text>
    <Text xsmall light>Large light</Text>
    <br />
  </div>
));