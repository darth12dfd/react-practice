//03-4 컴포넌트 상태 관리하기
//클래스 인스턴스 변수와 forceUpdate() 함수로 state 관리하기

/*
    꼭 setState()함수로 state를 관리할 필요는 없다. setState() 함수를 사용하는 이유는 앞에서 언급했던 것처럼 리액트 엔진이 state의 변경과 화면 동기화 과정을 처리해야 하기 때문이다.
    만약 출력 검증 작업 없이 함수가 호출될 때마다 새롭게 화면을 출력하고 싶다면 클래스 인스턴스 변수와 화면을 강제로 출력해주는 forceUpdate() 함수를 사용하면 된다.
    클래스 인스턴스 변수와 forceUpdate()를 사용하는 코드는 아래와 같다.
*/

import React from 'react';

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    //state 정의
    //클래스 변수로 초기값 정의
    this.loading = true;
    this.formData = 'no data';

    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    //state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate(); //컴포넌트 내장 함수 forceUpdate()를 호출하여 강제로 화면을 새로고침한다.
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중: {String(this.loading)}</span>
        <span>결과: {this.formData} </span>
      </div>
    );
  }
}

export default ForceUpdateExample;
