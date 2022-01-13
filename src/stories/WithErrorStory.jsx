//05-5. 필수 입력 항목 표시 기능 추가하며 하이어오더 컴포넌트 복습하기

//2. 스토리북 생성하기

import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyle';
import withError from '../05/withError';

const InputWithError = withError('올바르지 못한 값입니다.')(Input);
storiesOf('WithError',module)
    .addWithJSX('기본 설정',() => (
        <InputWithError name="name" hasError />
    ))
    .addWithJSX('errorMessage 예제',() => (
        <InputWithError name="name" hasError errorMessage="필수 항목입니다." />
    ));