//03-5 컴포넌트의 생명주기

//카운터 프로그램 만들며 생명주기 함수 사용해 보기

//2. NewCounter 컴포넌트 작성하기

/*
    getDerivedStateFromProps() 함수를 사용하여 변경된 프로퍼티 값으로 state값을 갱신한다.
    App 컴포넌트가 전달한 최초의 프로퍼티 값은 state.count에 저장되며, NewCounter 컴포넌트는 state.newCount로 증가값을 따로 분리하여 관리한다.
    state.count가 아니라 state.newCount로 증가값을 관리하는 이유는 getDerivedStateFromProps() 함수는 다른 프로퍼티가 변경되어도 호출되기 때문에, count 프로퍼티가 변경되었는지 비교라혈면 값을 따로 관리해야 한다.
*/

import React from 'react';

class NewCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      //프로퍼티에서 전달된 count값을 보관한다.
      count,
      newCount: count === state.count ? state.newCount : count, //프로퍼티가 변경되지 않았따면 기존 state 값으로 설정하고 그렇지 않다면 변경된 프로퍼티 값으로 설정한다.
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
