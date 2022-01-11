//05-3. 하이어오더 컴포넌트 라이브러리 사용하기

//1. branch() 함수로 조건에 따라 다른 컴포넌트 출력하기

//1-1. branch() 함수로 로딩 상태 표시 하이어오더 컴포넌트 만들기

/*
import React from 'react';
import branch from 'recompose/branch';
import Button from '../04/Button';

function isLoading(props){
    return props.isLoading;
}

function LoadingButton(props){
    return <Button disabled>로딩 중</Button>;
}

export default branch(
    isLoading,
    () => LoadingButton,//isLoading() 함수가 참값을 반환하면 props.isLoading(로딩 메시지)를, 로딩이 완료되면 Loading-Button 컴포넌트를 반환한다.
)(Button);

*/

//위의 코드를 좀 더 간결하게 표한하면 아래와 같다.

import React from 'react';
import branch from 'recompose/branch';
import Button from '../04/Button';

export default branch(
    ({ isLoading }) => isLoading,
    () => () => <Button disabled>로딩 중</Button>,//기존 컴포넌트인 LoadingButton 을 화살표 함수 표현식으로 반환한다.
)(Button);