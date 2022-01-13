//05-4. 다중 하이어오더 컴포넌트 사용하기

//1. compose() 함수로 다중 하이어오더 컴포넌트 사용하기

import compose from "recompose/compose";
import withLoading from "./withLoading";
import withState from "recompose/withState";
const withLoadData = withState('isLoading','setIsLoading',false);

function Component() {
    return '완료(컴포넌트 출력)';
}

const ComponentWithLoading = withLoading('로딩 중')(Component);
const ComponentWithLoadData = withLoadData(Component);

const withLoadingAndLoadData = compose(withLoadData, withLoading('로딩 중'));//로딩 상태(withLoadingData)를 정의한 후에 isLoading 프로퍼티를 withLoading 하이어오더 생성 함수에 전달하여 로딩메시지를 출력할 수 있도록 확장한다.

export const ComponentWithBoth = withLoadingAndLoadData(Component);//compose로 만든 증강된 하이어오더 컴포넌트 생성함수를 사용함으로써 하이어오더 컴포넌트 생성 함수 코드를 추가로 작성하지 않아도 된다.