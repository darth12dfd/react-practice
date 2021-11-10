//03-3 컴포넌트에 데이터를 전달하는 프로퍼티
//불리언 프로퍼티
//프로퍼티에 true를 전달하는 예제는 <ChildComponent boolValue />
//false는 이름을 생략하면 된다.ㄴ 예제는 <ChildComponent />

import React from 'react';

class BooleanComponent extends React.Component {
  render() {
    //불리언타입을 조건문에 적용한 예제
    const message = this.props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기';
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;
