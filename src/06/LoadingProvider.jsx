//06-1. 컨텍스트의 기초 개념 알아보기

//5. 컴포넌트에서 공급자 분리하기

/* 
    이전 과정에서 공급자를 구현할 때 공급자를 HomePageComponent에 포함시켰는데 여기서는 공급자를 분리하도록 한다.

    이때 분리된 공급자 컴포넌트는 PureComponent 클래스가 아닌 Component 클래스를 사용한다. PureComponent 클래스는 컨텍스트 변경에 대한 비교가 생략되어 있기 때문이다.
    만약 PureComponent 클래스로 공급자를 구현한 다음 2개 이상의 공급자를 겹쳐 사용하면 상위 공급자의 컨텍스트 데이터가 변경된 이후 하위 공급자에 포함되어 있는 컴포넌트들은 shouldComponentUpdate() 생명주기 함수가 false를 반환하여 render() 함수를 호출하지 않는다.

    간단히 말해 하위 공급자에 포함되어 있는 컴포넌트들이 동기화되지 않는다는 것이다.
*/

//05-1. 공급자 컴포넌트 만들기

import React from "react";
import PropTypes from 'prop-types';

class LoadingProvider extends React.Component{
    constructor(props){
        super(props);

        this.state = { loading: false };
        this.setLoading = this.setLoading.bind(this);
    }

    getChildContext(){//홈페이지 컴포넌트에 사용된 공급자 데이터 항목을 옮겨 놓는다. 
        return {
            loading: this.state.loading,
            setLoading: this.setLoading,
        };
    }

    setLoading(loading){
        this.setState({ loading });
    }

    render(){
        return this.props.children;//자식 프로퍼티 노드를 출력한다.
    }
}

LoadingProvider.childContextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
};

export default LoadingProvider;