//06-2. 컨텍스트 제대로 사용하기

//3. 여러 공급자를 구독하는 소비자 만들기

/*
    이전 과정에서 하나의 소비자가 두 개의 공급자 중 하나를 선택하여 데이터를 구독했다. 여기서는 하나의 소비자가 동시에 두 개의 컨텍스트 데이터에 접근할 때 발생하는 문제를 알아본다.

    앞에서 하이어오더 컴포넌트로 소비자를 만들 수 있게 되었으므로 이를 compose()함수에 응용해 볼 수 있다. 즉, 다음과 같이 하이어오더 컴포넌트를 조합하여 소비자를 만들어 본다.

    const ButtonWithDefaultLoadingContext = compose(
        withLoadingContextAndKey(),
        withLoadingContextAndKey('loading2'),)
    )(Button);

    하지만 위와 같이 compose() 함수를 사용하면 소비자에는 중복된 loading 프로퍼티가 전달된다.

    <Button loading = { context[defaultLoadingKey].loading} loading = {context['loading2'].loading} ... />

    뒤쪽 프로퍼티(context['loading2'].loading)가 마지막에 읽히므로 앞쪽의 프로퍼티가 손실될 것이다. 이런 경우를 하이어오더 컴포넌트 조합 충돌 문제라고 한다. 이 문제를 해결하려면 render 프로퍼티를 도입해야 한다.
*/

//4. 하이어오더 컴포넌트 조합 충돌 문제 해결하기

/*
    위에서 언급한 문제를 해결하기 위해서 render 프로퍼티를 도입한다. 앞에서 소비자를 만들기 위해 작성한 하이어오더 컴포넌트의 render() 함수를 프로퍼티로 전달받으면 해결할 수 있다.
*/

//4-1. 하이어오더 컴포넌트의 render() 함수 재구성하기

/*
    다음은 하이어오더 컴포넌트가 render 프로퍼티로 render() 함수를 전달받아 출력하도록 수정한 것이다.

    context[contextKey]는 이후 과정 4-2에서 소비자를 생성할 때 전달하는 render 프로퍼티의 함수에서 사용할 loading과 setLoading을 결정해준다.
*/

import React from "react";
import PropTypes from 'prop-types';
import { DEFAULT_KEY, contextPropTypes } from "./LoadingProviderWithKey";

export default (contextKey = DEFAULT_KEY) => {
    function LoadingConsumer({ render }, context){
        return render(context[contextKey]);
    };
    LoadingConsumer.contextTypes = {
        [contextKey]: contextPropTypes,
    };
    LoadingConsumer.propTypes = {
        render: PropTypes.func.isRequired,
    };
    return LoadingConsumer;
};

