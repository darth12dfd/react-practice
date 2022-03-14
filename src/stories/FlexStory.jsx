//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-2. 플렉스 박스로 가로 배치를 위한 레이아웃 컴포넌트 만들기

/*
    플렉스박스 레이아웃으로 가로 배치를 위한 레이아웃 컴포넌트를 만든다. 플렉스박스 레이아웃의 개념은 아래와 같다.
*/

///08-2-2-1. 플렉스 박스 레이아웃 간단히 사용해보기

/*
    플렉스 박스 레이아웃은 플렉스박스 레이아웃을 적용하려는 부모 엘리먼트의 display 속성을 flex로, flexDirection 속성을 row 또는 column으로 지정하면 된다.
    flexDirection 에 따라 정렬 방향을 정할 수 있다. 다음은 스토리북에서 플렉스박스 레이아웃을 테스트한 것이다.
*/

import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Doit-UI/Flex', module)
    .addWithJSX('flexDirection 예제',() => (
        <div>
      <h4>flexDirection: 'row'</h4>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
      </div>
      <h4>flexDirection: 'column'</h4>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
      </div>
    </div>
    ));

