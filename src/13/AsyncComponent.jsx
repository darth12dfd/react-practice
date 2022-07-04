//13-1. 코드 스플릿팅 기법으로 bundle.js 크기 줄이기

///13-1-1. 첫 번째 화면 출력 시간을 더 빠르게 만들어보기

/*
    SPA는 index.html, bundle.js만 있으면 모든 페이지를 구성할 수 있기에 화면 전환이 빠르다. 그 세세한 과정은 아래와 같다.

    create-react-app은 웹팩을 통해 화면을 구성할 때 피룡한 모든 파일(Home.jsx,Signup.jsx,Login.jsx,...)들을 bundle.js로 합친다.

    만약 화면이 구성할 때 필요한 파일이 많아지면 사용자는 bundle.js를 내려받기 전까지는 첫 번째 화면을 볼 수 없을 것이다.

    이 문제를 해결하기 위해 코드 스플릿팅 기법을 도입해야 한다. 코드 스필릿팅 기법은 이름에서 알 수 있듯 화면 구성에 필요한 파일을 작게 나누는 기법을 말한다.
*/

///13-1-2. AsyncComponent로 지연 로딩 구성하기

/*
    웹팩은 특정 파일을 분리하여 구성해두었다가 호출될 때 지연 로딩할 수 있도록 import() 함수를 제공한다.
    지연로딩을 적용할 import() 함수를 프로퍼티로 받아 호출하도록 만들면 여러 컴포넌트에 지연 로딩을 적용할 수 있다.
*/

import React , { PureComponent } from 'react';
import Text from '../doit-ui/Text';

export default class AsyncComponent extends PureComponent {
    componentDidMount(){
        const { loader } = this.props;

        loader().then(({ default: Component }) => {
            this.Component = Component;
            this.forceUpdate();
        });
    }

    render(){
        const { loader, ...otherProps } = this.props;
        const Component = this.Component;

        return Component ? <Component {...otherProps} /> : <Text secondary large>로딩중...</Text>;
    }
}