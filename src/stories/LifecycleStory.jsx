//05-3. 하이어오더 컴포넌트 라이브러리 사용하기

//3. lifecycle() 함수로 함수형 컴포넌트에 생명주기 함수 추가하기

//3-2. 스토리북에 예제 생성하기

import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWithLoadData, PageWithLoadDataAndLoading } from '../05/lifecycle';

storiesOf('Lifecycle',module)
    .addWithJSX('loadData 예제', () => (
    <PageWithLoadData loadData = {() => fetch('/').then(()=> 'hello')} />
    ))
    .addWithJSX('로딩 메시지 예제', () => (
        <PageWithLoadDataAndLoading loadData = {() => fetch('/').then(() => 'hello')} />
    ));