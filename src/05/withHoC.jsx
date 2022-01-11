//05-2 하이어오더 컴포넌트 기초 개념 공부하기

//하이어오더 컴포넌트 간단하게 사용해보기

//1. 하이어 오더 컴포넌트 구현하기

import React from 'react';

/*
export default function withHoc(WrappedComponent){
    return class WithHoc extends React.Component{
        render(){
            return <WrappedComponent {...this.props}/>;
        }
    }
}
*/

//3. 하이어오더 컴포넌트 구조 살펴보기

//3-1. 확장 컴포넌트가 기존 컴포넌트 이름 함께 출력하기

/*
export default function withHoC(WrappedComponent){
    return class WithHoC extends React.Component {
        static displayName = `withHoC(${WrappedComponent.name})`;
        render(){
            return <WrappedComponent {...this.props}/>;
        }
    }
}
*/

//3-2. 다른 확장 컴포넌트에서 정의된 displayName 함께 표시하기
export default function withHoC(WrappedComponent){
    const{ displayName, name } = WrappedComponent;//WrappedComponent의 displayName과 name을 추출한다.
    const WrappedComponentName = displayName || name;//displayName이 있으면 wrappedComponentName에는 displayName이 먼저 할당된다.

    return class WithHoc extends React.Component{
        static displayName = `withHoC(${WrappedComponentName})`;
        render(){
            return <WrappedComponent {...this.props}/>;
        }
    }
}
