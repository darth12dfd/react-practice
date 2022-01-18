//06-1. 컴텍스트의 기초 개념 알아보기

//4. 소비자를 하이어오더 컴포넌트로 구현하기

/*
    소비자를 구현하는 방법은 소비자의 역할을 할 컴포넌트에 contextTypes 속성을 추가하여 공급나에서 구독할 항목을 정의하면 된다.
    다만 매번 컴포넌트에 contextTypes 속성을 추가하면 불편하므로 하이어오더 컴포넌트 개념을 도입한다.
*/

//4-1. 소비자를 반환하는 하이어오더 컴포넌트 구현하기

/*
    05 폴더에서 작성한 withLoading.jsx를 수정하여 소비자를 반환하는 하이어오더 컴포넌트를 구현한다.
*/

import React from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent => {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoadingContext(props, context){
        const { loading, setLoading } = context;
        return(
            <WrappedComponent {...props} loading = { loading } setLoading = { setLoading } />//컨텍스트로 전달받은 객체를 프로퍼티로 변환하여 전달한다.
        );
    };

    WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
    WithLoadingContext.contextTypes = {//구독할 컨텍스트의 항목을 정의한 contextTypes를 추가한다.
        loading: PropTypes.bool,
        setLoading: PropTypes.func,
    };

    return WithLoadingContext;
};

