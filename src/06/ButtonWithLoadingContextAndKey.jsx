//06-2. 컨텍스트 제대로 사용하기

//2. 커링으로 중복 공급자 문제 해결하기

///2-4. 하이어오더 컴포넌트로 소비자 만들기

/*
    이제 각기 다른 키값의 컨텍스트 데이터를 구독하는 소비자 컴포넌트를 만들어 출력한다.
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContextAndKey, { loadingPropTypes } from './withLoadingContextAndKey';//소비자와 추가될 프로퍼티 정보를 함께 임포트한다.

function ButtonWithLoadingContext( { children, loading, setLoading }) {
    return(
        <Button onPress = { () => setLoading(!loading)}>
            { loading ? '로딩 중' : children }
        </Button>
    );
}

ButtonWithLoadingContext.propTypes = {
    ...loadingPropTypes,
    children: PropTypes.string,
};

export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey()(ButtonWithLoadingContext);//이중 커링 구조의 생성 함수를 키값 없이 사용하여 기본 공급자와 여녈된 버튼 컴포넌트를 생성한다.
export const ButtonWithLoading2Context = withLoadingContextAndKey('loading2')(ButtonWithLoadingContext);//loading2 키값으로 생성된 공급자와 연결된 버튼 컴포넌트를 생성한다.

/*
    위 코드를 보면 withLoadingContextAndKey() 함수의 인자에 키값을 전달하여 적절한 공급자의 컨텍스트 데이터를 구독하는 소비자 컴포넌트를 생성하고 있다.
*/

