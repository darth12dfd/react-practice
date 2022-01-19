//06-2. 컨텍스트 제대로 사용하기

//4. 하이어오더 컴포넌트 조합 충돌 문제 해결하기

///4-2. 소비자의 render 프로퍼티에 render() 함수 구현하여 전달하기

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import createLoadingConsumer from './createLoadingConsumer';

const DefaultLoadingConsumer = createLoadingConsumer();
const Loading2Consumer = createLoadingConsumer('loading2');

function ButtonWithConsumer({ children }) {
    return (
        <React.Fragment>
            <DefaultLoadingConsumer
                render = {({ loading, setLoading }) => (
                    <Button onPress = {() => setLoading(!loading)}>
                        {loading ? '컨텍스트1 로딩 중': children}
                    </Button>
                )}
            />
            <Loading2Consumer
                render = { ( { loading, setLoading } ) => (
                    <Button onPress = {() => setLoading(!loading)}>
                        {loading ? '컨텍스트2 로딩 중': children}
                    </Button>
                )}
            />
            <DefaultLoadingConsumer
                render={({ loading, setLoading }) => (
                    <Loading2Consumer
                        render={({ loading: loading2 }) => (
                            <Button onPress={() => setLoading(!loading)}>
                                {loading || loading2 ? '로딩중' : children}
                            </Button>
                        )}
                    />
                )}
            />
        </React.Fragment>
    );
}

ButtonWithConsumer.propTypes = {
    children: PropTypes.string,
};

export default ButtonWithConsumer;

/* 
    위의 코드에서 render 프로퍼티에 render() 함수를 화살표 함수를 구현했다.

    4-1에서 작성한 render(context[contextKey])를 생각해보면 화살표 함수의 인자 loading과 setLoading으로 소비자가 구독하고 있는 컨텍스트 데이터가 전달되는 것임을 알 수 있다.
*/

