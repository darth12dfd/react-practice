//06-2. 컨텍스트 제대로 사용하기

//2. 커링으로 중복 공급자 문제 해결하기

///2-2. 서로 다른 컨텍스트 데이터를 가진 공급자 만들기

/*
    2-1 과정에서 만든 커링 함수로 LoadingProvider1, LoadingProvider2 컴포넌트를 만들고 이를 소비자에 연결한다.

    코드를 보면 LoadingProvider1은 키값을 전달받지 않으며 LoadingProvider2는 키값 'loading2'를 전달받는다.
*/

import React, { PureComponent } from 'react';
import {
    ButtonWithDefaultLoadingContext,
    ButtonWithLoading2Context,
} from './ButtonWithLoadingContextAndKey';//2-4 과정에서 구현할 소비자 임포트
import LoadingProviderWithKey from './LoadingProviderWithKey';
import ButtonWithConsumer from './ButtonWithConsumer';

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey('loading2');

function TableComponent() {
    return (
        <table>
            <ButtonWithDefaultLoadingContext>컨텍스트1</ButtonWithDefaultLoadingContext>
            <ButtonWithLoading2Context>컨텍스트2</ButtonWithLoading2Context>
            <ButtonWithConsumer>다중 소비자 예제</ButtonWithConsumer>
        </table>
    );
}

class HomePageComponenetWithTwoProvider extends PureComponent {
    render(){
        return(
            <LoadingProvider1>
                <LoadingProvider2>
                    <TableComponent />
                </LoadingProvider2>
            </LoadingProvider1>
        );
    }
}

export default HomePageComponenetWithTwoProvider;

/*
    이후 소비자에 참조될 컨텍스트 데이터는 아래와 같은 구조를 가지고 있다.

    context: {
        defaultLoadingKey: {
            loading, //LoadingProvider1의 state
            setLoading, //LoadingProvider1의 setState
        },
        loading2: {
            loading, //LoadingProvider2의 state
            setLoading, //LoadingProvider2의 setState
        },
    }
*/
