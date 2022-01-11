//05-3. 하이어오더 컴포넌트 라이브러리 사용하기

//1. branch() 함수로 조건에 따라 다른 컴포넌트 출력하기

//1-2. 스토리북에 예제를 추가하여 화면 작동을 확인한다.

import React from 'react';
import { storiesOf } from '@storybook/react';

import BranchLoadingButton from '../05/branch';

storiesOf('Branch',module)
    .addWithJSX('기본 설정',() => <BranchLoadingButton>안녕하세요</BranchLoadingButton>)
    .addWithJSX('isLoading 예제',() =>(
        <BranchLoadingButton isLoading>안녕하세요</BranchLoadingButton>
    ));