//06-1. 컨텍스트의 기초 개념 알아보기

//5. 컴포넌트에서 공급자 분리하기

//5-3. 스토리북에 추가하기

import React from "react";
import  { storiesOf } from '@storybook/react';

import HomePageComponent from "../06/HomePageComponent";
import HomePageWithProvider from '../06/HomePageWithProvider';
import HomePageWithTwoProvider from '../06/HomePageWithTwoProvider';

storiesOf('HomePageComponent', module)
    .addWithJSX('컨텍스트 예제', () => <HomePageComponent />)
    .addWithJSX('Provider 예제', () => <HomePageWithProvider/>)
    .addWithJSX('이중 Provider 예제', () => <HomePageWithTwoProvider/>);//06-2에서 커링으로 중복 공급자 문제 해결하는 코드를 스토리로 보여준다.