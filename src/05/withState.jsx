//05-3. 하이어오더 컴포넌트 라이브러리 사용하기

//2. withState() 함수로 상태 관리와 이벤트 처리하기

//2-1. withState() 함수 사용하여 카운트를 관리하는 state 구현하기

import React from 'react';
import withState from 'recompose/withState';
import Button from '../04/Button';

export const withCountState = withState('count','setCount',0);

function Counter({ count, setCount }){
    const increaseCount = () => setCount(value => value + 1);//setCount() 콜백 함수를 이용하여 increaseCount() 함수가 호출될 때 count를 1씩 증가하도록 만들었습니다.

    return (
        <div>
            현재 카운트: {count}
            <Button onPress = {increaseCount}>
                카운트 증가
            </Button>
        </div>
    );
}

export const CounterWithCountState = withCountState(Counter);