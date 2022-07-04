//13-1. 코드 스플릿팅 기법으로 bundle.js 크기 줄이기

///13-1-3. AsyncMainPage 컴포넌트 작성하기

import React from 'react';
import AsyncComponent from './AsyncComponent';

export default function AsyncMainPage() {
    return <AsyncComponent loader = {() => import('../08/components/main/MainPage')} />;
};