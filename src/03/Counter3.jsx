//03-9 컴포넌트에서 콜백 함수와 이벤트 처리하기

/* 컴포넌트에서 DOM 이벤트 사용하기 */

/*
    컴포넌트에서 출력된 특정 DOM 객체에 이벤트 컴포넌트가 반응하기 위해서는 DOM 이벤트 프로퍼티를 사용해야 한다. 컴포넌트에 출력된 버튼이 클릭되었을 때 카운트 숫자가 증가하는 경우가 그 예이다.
    이벤트 프로퍼티는 특수 프로퍼티로 콜백 함수 형태로 전달해 처리한다. 다음은 자주 쓰는 이벤트 이름과 DOM 이벤트 프로퍼티를 정리한 표이다.

    | 이벤트 이름 | 이벤트 호출 시점 | JSX DOM 이벤트 프로퍼티 |
    | click | 엘리먼트의 마우스나 키보드가 클릭될 때 | onClick |
    | submit | 폼의 데이터가 전송될 때 | onSubmit |
    | mousemove | 엘리먼트 위에서 마우스 커서가 움직일 때 | onMouseMove |
    | mouseover | 엘리먼트 영역 위로 마우스 커서가 돌아다닐 때 | onMouseOver |
    | mouseout | 엘리먼트 위에 있던 마우스 커서가 영역을 떠나갈 때 | onMouseOut |
    | keydown | 키보드 버튼이 눌렸을 때 | onkeyDown |
    | keypress | 키보드 버튼 입력이 완료되었을 때 | onKeyPress |
*/

import React from 'react';

class Counter3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button
          onClick={this.increaseCount} //버튼이 클릭될 때 카운트를 증가하는 함수를 호출한다.
          onMouseOut={this.resetCount} //마우스가 버튼 밖으로 이동하면 카운트를 초기화하는 함수를 호출한다.
        >
          카운트 증가
        </button>
        버튼 밖으로 커서가 움직이면 0으로 초기화된다.
      </div>
    );
  }
}

export default Counter3;

//단방향 흐름 방식 개념 정리

/*
    리액트는 프로퍼티, state 같은 데이터를 상위 컴포넌트에서 하위 컴포넌트 방향으로 전달한다. 
    만약 데이터 변경이 필요한 경우 콜백 함수를 호출하여 원본 데이터가 위치한 상위 컴포넌트에서 데이터를 변경하고 다시 자기 컴포넌트로 전달하도록 만든다.
*/
