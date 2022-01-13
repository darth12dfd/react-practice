//05-5. 필수 입력 항목 표시 기능 추가하며 하이어오더 컴포넌트 복습하기

//1. 하이어오더 컴포넌트 만들기

import React from 'react';
import withStyles, { css } from '../04/withStyles';//withStyles 컴포넌트 사용하기

export default function(defaultMessage){//2. 오류 메시지를 커링 함수의 인자로 전달한다.
    return WrappedComponent => {
        const { displayName, name: componentName } = WrappedComponent;
        const WrappedComponentName = displayName || componentName;//displayName 또는 componentName을 가져와 컴포넌트의 이름을 표시한다.

        function ComponentWithError({//반환되는 확장 컴포넌트를 함수형 컴포넌트로 작성한다.
            hasError,
            errorMessage,
            styles,
            ...props
        }) {
            return (//오류 메시지를 withStyles 컴포넌트로 꾸민 다음, hasError가 true인 경우 출력한다.
                <React.Fragment>
                    <WrappedComponent { ...props } />
                    {hasError && <div { ...css(styles.error)}>{errorMessage}</div>}
                </React.Fragment>
            );
        };

        ComponentWithError.defaultProps = {
            errorMessage: defaultMessage//인자로 전달받은 오류 메시지를 기본 오류 메시지로 지정한다.
        };

        ComponentWithError.displayName = `withError(${WrappedComponentName})`;//ComponentWithError의 displayName을 정의한다.
    
        return withStyles(({ color }) => ({//하이어오더 컴포넌트 안에서 사용된 스타일을 스타일 컴포넌트 생성 함수를 이용하여 정의한다.
            error: {
                color: color.error,//오류 메시지의 색상을 테마에서 정의한 색상으로 지정한다.
            }
        }))(ComponentWithError);
    };

}