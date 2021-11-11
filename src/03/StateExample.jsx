//03-4 컴포넌트 상태 관리하기

//프로퍼티의 특징은 컴포넌트 내부에서 값을 바꿀 수 없다. 그렇기에 값을 바꿔야 하는 경우에는 state를 사용해서 컴포넌트의 상태를 관리하면 된다.

//state로 상태 관리하기

import React from 'react';

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    //state 정의
    this.state = {
      //컴포넌트에서 관리하려는 변수 state의 초깃값을 this.state에 객체 형태로 정의했다.
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this); //함수로 넘어갈 this는 반드시 생성자에서 bind() 함수로 묵어주어야 한다.
    //4초 후에 handleData 함수를 호출한다.
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state; //컴포넌트 특수 변수 this.state를 사용하여 state 값에 접근한다.
    //state 변경
    this.setState({
      //컴포넌트의 냊아 함수 this.setState()를 사용하여 state 값을 변경한다.
      loading: false,
      formData: data + formData,
    });
    //this.state.loading의 값은 현재 true이다.
    console.log('loading값', this.state.loading);
    //이후 호출될 render() 함수에서의 this.state.loading은 false이다.
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;

//state를 사용할 때 주의할 점
//1. 생성자(constructor)에서 반드시 초기화해야 한다.
//2. state 값을 변경할 때는 setState() 함수(상태 관리 함수)를 반드시 사용해야 한다.
//3. setState() 함수는 비동기로 처리되며, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거친다.

/*
    state 값을 직접 변경하면 안되는 이유는 render() 함수로 화면을 그려주는 시점은 리액트 엔진이 정하기 때문이다.
    즉, 개발자가 state값을 직접 변경해도 render() 함수는 새로 호출이 되지 않는다.

    하지만 setState() 함수를 호출하여 state값을 변경하면 리액트 엔진이 자동으로 render() 함수를 호출하므로 화면에 변경된 state값을 새롭게 출력할 수 있다.
*/

/* 
    또한 setState() 함ㅁ수의 인자로 함수를 전달하면 이전 state값을 따로 읽는 과정을 생략할 수도 있다.

    //예제 코드는 아래와 같다.

    //일반 함수를 사용한 예
    handleData(data){
        this.setState(function(prevState){
            const newState = {
                loading: false,
                formData: data + prevState.formData,
            };
            return newStata;
        });
    }

    //화살표 함수를 사용한 예
    handleData(data){
        this.setState(prevState => ({
            loading: false,
            formData: data + prevState.formData
        });
    }
*/
