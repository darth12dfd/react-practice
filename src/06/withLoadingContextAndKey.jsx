//06-2. 컨텍스트 제대로 사용하기

//2. 커링으로 중복 공급자 문제 해결하기

///2-3. 소비자를 반환하는 하이어오더 컴포넌트 수정하기

/*
    변경된 공급자의 구조에 맞게 커링 함수를 사용하여 하이어오더 컴포넌트를 수정한다.

    context를 인자로 받아 { loading, setLoading }과 같이 구조 분해 할당한 다음 소비자 컴포넌트에 전달하는 것에 주목한다.
*/

import React from 'react';
import { DEFAULT_KEY, contextPropTypes } from './LoadingProviderWithKey';//공급자에 정의된 컨텍스트 데이터의 키값과 항목 정보를 임포트한다.

export const loadingPropTypes = contextPropTypes;//공급자의 컨텍스트 데이터의 자료형을 가져와 loadingPropTypes에 대입한다.

export default (contextKey = DEFAULT_KEY) => WrappedComponent => {//공급자의 컨텍스트 데이터 키값을 인자로 전달받는 하이어오더 컴포넌트를 만든다.
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoadingContext(props, context){
        const { loading, setLoading } = context[contextKey];//키값에 맞는 컨텍스트 데이터를 구조 분해 할당한다.
        console.log('c',context);
        return(
            <WrappedComponent {...props} loading = { loading } setLoading = { setLoading } />
        );
    };

    WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
    WithLoadingContext.contextTypes =  {
        [contextKey]: contextPropTypes,//소비자가 구독할 컨텍스트 데이터의 자료형이다. 이후 구독자의 컨텍스트 데이터 이름이나 자료형이 변경되면 자동으로 소비자에도 반영된다.
    };

    return WithLoadingContext;
};

