//06-1. 컨텍스트의 기초 개념 알아보기

//1. 관찰자 패턴

/*
    컴포넌트의 기본 데이터 흐름은 위에서 아래로 흐른다. 이때 부모 컴포넌트에서 사용된 프로퍼티가 특정 자식 컴포넌트에서 사용되지 않을 수도 있고, 전달 과정에서 누락될 수도 있다. 그렇게 되면 리액트 앱에 오류가 발생하게 된다.
    이를 해결하기 위해 특정 프로퍼티를 원하는 컴포넌트에 바로 전달하는 방법이 필요한데 이를 위해 도입한 디자인 패턴이 관찰자 패턴이다.

    관찰자 패턴이란 '데이터는 공급자가 관리하고 관찰자는 공급자를 구독하여 데이터를 얻는 방식'을 말한다.

    즉, 관찰자 패턴을 도입하면 공급자와 관찰자가 서로 역할을 분리하여 데이터를 관리하게 된다.
    공급자는 데이터 보관, 데이터 변경, 소비자에게 데이터를 공급하는 역할을 하고, 관찰자는 공급자를 구독하여 데이터를 소비하는 역할을 담당한다. 그렇기에 관찰자를 소비자라고 부르기도 한다.

    공급자와 소비자가 추가된 관찰자 패턴에서는 데이터가 모든 컴포넌트를 거치지 않게 된다. 만약 데이터가 변경되면 공급자는 변경된 data를 소비자에게 전달하면 된다. 이를 컴포넌트 간의 자료 의존성이 없다고 한다. 이런 흐름을 만들어주는 기술이 '컨텍스트이다.
*/

//2. 공급자와 소바지의 관계

/*
    1. 소비자는 공급자보다 낮은 계층에 있어야 한다. 
        소비자가 공급자보다 상위에 있으면 공급자를 구독할 수 없다.
    2. 소비자는 공급자가 제공하는 콜백 함수로 데이터를 변경할수 있다.
        소비자는 공급자의 데이터를 변경할 수 있으나, 소비자가 공급자의 데이터를 변경할 때는 '공급자의 데이터에 직접 접근하여 변경하는 것'이 아니라 '공급자로부터 데이터 변경을 위한 콜백 함수를 받아 데이터 변경 요청'을 해야 한다.
    
        위의 과정을 통해 발생하는 데이터 흐름을 Data Down, Action Up, 줄여서 DDAU라고 부른다.
        이와 같은 단방향 데이터 흐름은 변경된 데이터의 일관성을 유지하는 데 매우 효과적이다.
*/

//3. 공급자 구현하기

/*
    공급자를 구현하는 방법은 공급자 역할을 할 컴포넌트에 공급자의 자료형과 데이터 제공 함수를 정의하면 된다.
    단, 함수형 컴포넌트로는 공급자를 구현할 수 없으므로 클래스형 컴포넌트로 공급자를 구현한다.
*/ 

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import ButtonWithContext from './ButtonWithContext';//소비자 컴포넌트

function RowBComponent(){
    return <Button>버튼</Button>;
}

function RowCComponent(){
    return <ButtonWithContext>버튼</ButtonWithContext>;//소비자를 출력한다.
}

function TableComponent(){
    return(
        <table>
            <RowBComponent />
            <RowCComponent />
        </table>
    );
}

class HomePageComponent extends PureComponent{
    constructor(props){
        super(props);

        this.state = { loading: false };
        /* 
            콜백 함수 setLoading()을 소비자에 전달하여 데이터를 변경할 예정이므로 공급자의 this를 바인딩한다. 
            만약 this를 바인딩하지 않으면 콜백 함수가 실행되는 소비자 컴포넌트에서 공급자의 setState()함수에 접근하지 못하므로 오류가 발생한다.
        */
        this.setLoading = this.setLoading.bind(this);
        this.toggleLoading= this.toggleLoading.bind(this);
    }

    getChildContext(){//소비자는 getChildContext() 함수를 통해 loading와 setLoading() 함수를 전달받을 것이다.
        return {
            loading: this.state.loading,
            setLoading: this.setLoading,
        };

    }

    setLoading(loading){
        this.setState({ loading });
    }

    toggleLoading(){
        this.setState(({ loading }) => ({ loading: !loading }));
    }

    render(){
        return(
            //toggleLoading() 함수를 실행하는 버튼이다.
            <div>
                <TableComponent />
                <Button onPress = {this.toggleLoading}>상태 변경</Button>
            </div>
        );
    }
}

HomePageComponent.childContextTypes = {//컨텍스트의 자료형을 정의한다.
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
}

export default HomePageComponent;

/* 
    공급자의 데이터는 state로 관리한다. loading은 로딩 상태 데이터이고, setLoading() 함수는 소비자가 데이터 변경 요청을 할 때 사용하는 콜백 함수이다. 이 함수를 호출하면 소비자에서 setState() 함수를 호출하여 공급자의 state를 변경한다.
*/