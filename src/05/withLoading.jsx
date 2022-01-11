//05-2. 하이어오더 컴포넌트 기초 개념 공부하기

//4. 하이어오더 컴포넌트 기능 구현하기

//4-1. 로딩 표시 화면 하이어오더 컴포넌트 만들기

import React from 'react';

/*

export default function withLoading(WrappedComponent, loadingMessage = '로딩 중'){
    const { displayName, name: componentName } = WrappedComponent;//WrappedComponent의 displayName과 name을 추출한다.
    const WrappedComponentName = displayName || componentName;//displayName, name 순서로 이름을 할당한다.

    function WithLoading({ isLoading, ...otherProps }){
        //4-2. isLoading 프로퍼티 조건 추가하기
        //if(props.isLoading) return '로딩 중';

        //4-3. 필요한 프로퍼티만 구조 할당 표현식으로 추출하기
        if(isLoading) return loadingMessage;

        return(
            <WrappedComponent {...otherProps} />
        );
    };

    WithLoading.displayName = `withLoading(${WrappedComponentName})`;//withLoading()에 감싸 컴포넌트 이름을 표시한다.

    return WithLoading;
}

*/

//04-5. 다중 커링으로 하이어오더 컴포넌트 반환하기
export default function(loadingMessage = '로딩 중'){
    return function withLoading(WrappedComponent){//확장 컴포넌트에서 출력할 메시지를 전달받는 커링함수이다.
        const { displayName, name: componentName } = WrappedComponent;
        const WrappedComponentName = displayName || componentName;

        function WithLoading({ isLoading, ...otherProps }){
            if(isLoading) return loadingMessage;
            return(
                <WrappedComponent {...otherProps}/>
            );
        };

        WithLoading.displayName =`withLoading(${WrappedComponentName})`;
        return WithLoading;
    }
}