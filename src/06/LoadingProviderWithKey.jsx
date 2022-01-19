//06-2. 컨텍스트 제대로 사용하기

//1. 중복 공급자 개념

/*
    공급자 A와 B가 전달하는 데이터의 이름이 같다면 소비자는 더 가까운 공급자의 데이터를 수신한다. 

    예를 들어 2개의 로딩 상태(loading1, loading2)를 필요로 하는 소비자(MyComponent)는 다음과 같이 배치될 것이다.

    <LoadingProvider>//loading1을 위한 공급자
        <LoadingProvider>//loading2을 위한 공급자
            <MyComponent />
        </LoadingProvider>
    </LoadingProvider>

    그러나 앞에서 공급자를 구현할 때 loading 이라는 키를 사용하여 프로퍼티에 데이터를 전달해다. 키 이름이 중복되므로 소비자는 결국 가장 가까운 위치에 있는 공급자인 loading2에만 접근하게 된다.
*/

//2. 커링으로 중복 공급자 문제 해결하기

/*
    위에서 언급한 문제를 해결하는 방법은 '커링을 도입하는 것'이다.

    키 이름을 인자로 받아 원하는 공급자의 컨텍스트 데이터를 반환하는 커링 함수를 만들면 되는 것이다.
*/

///2-1. 공급자를 반환하는 커링 함수 만들기

/*
    다음 커링 함수는 contextKey를 인자로 받아 공급자를 반환한다. getChildContext()를 보면 [contextKey]라고 되어 있따. 이는 contextKey로 구분된 컨텍스트 데이터를 가진 공급자를 생성하기 위함이다.
*/

import React from 'react';
import PropTypes from 'prop-types';

export const DEFAULT_KEY = 'defaultLoadingkey';//공급자의 기본 키값 정보를 공유한다.

export const contextPropTypes = {//공급자에 정의된 컨텍스트 데이터의 자료형을 공유한다.
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
};

export default (contextKey = DEFAULT_KEY) => {//contextKey = DEFAULT_KEY를 통해 컨텍스트 데이터의 기본 키값을 정한다.
    class LoadingProvider extends React.Component {
        constructor(props){
            super(props);

            this.state = { loading: false };
            this.setLoading = this.setLoading.bind(this);
        }

        getChildContext() {
            return {
                [contextKey]: {//contextKey에 해당하는 로딩 상태 정보 객체(공급자의 컨텍스트 데이터)를 반환한다.
                    loading: this.state.loading,
                    setLoading: this.setLoading,
                },
            };
        }

        setLoading(loading){
            this.setState({ loading });
        }

        render(){
            return this.props.children;
        }
    }

    LoadingProvider.childContextTypes = {
        [contextKey]: contextPropTypes,
    };

    return LoadingProvider;
};
