//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-2. 플렉스 박스로 가로 배치를 위한 레이아웃 컴포넌트 만들기

///08-2-2-3. InlineList 컴포넌트 사용해보기

import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineList from '../doit-ui/InlineList';
import { css } from '../doit-ui/withStyles';

function RedBox({ children }){
    return(
        <div {...css({ backgroundColor: 'red', padding: 30, height: Math.random() * 100})}>
            {children}
        </div>
    )
}

storiesOf('Doit-UI/InlineList',module)
    .addWithJSX('기본 설정',() => (
        <InlineList>
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('align=center', () => (
        <InlineList align="center">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('align=right', () => (
        <InlineList align="right">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('verticalAlign=top', () => (
        <InlineList verticalAlign="top">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('verticalAlign=bottom', () => (
        <InlineList align="bottom">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ));