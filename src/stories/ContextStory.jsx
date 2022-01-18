//06-1. 컨텍스트의 기초 개념 알아보기

//5. 컴포넌트에서 공급자 분리하기

//5-3. 스토리북에 추가하기

import React from "react";
import  { storiesOf } from '@storybook/react';

import HomePageComponent from "../06/HomePageComponent";
import HomePageWithProvider from '../06/HomePageWithProvider';

storiesOf('HomePageComponent', module)
    .addWithJSX('컨텍스트 예제', () => <HomePageComponent />)
    .addWithJSX('Provider 예제', () => <HomePageWithProvider/>);