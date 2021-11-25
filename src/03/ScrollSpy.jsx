//03-9 컴포넌트에서 콜백 함수와 이벤트 처리하기

//컴포넌트에서 DOM 객체 함수 사용하기

/*
    컴포넌트에서 window.addEventListener() 함수와 같은 DOM 객체 함수를 사용하려면 DOM 객체를 컴포넌트 변수에 할당해야 한다.
    이때 특수 프로퍼티 ref를 사용한다. ref 프로퍼티는 document.getElementById()가 반환하는 객체를 반환한다. 단 ref 프로퍼티는 DOM 객체 함수가 필요한 엘리먼트에 콜백 함수 형태로 전달된다.
*/

import React from 'react';

export default class ScrollSpy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }
  setRef(ref) {
    this.ref = ref; //ref 프로퍼티에서 반환된 객체를 컴포넌트 변수에 할당한다.
  }

  checkPosition() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      //현재 DOM 객체의 위치가 스크롤 화면 안팎인지 측정
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition); //윈도우의 스크롤 이동 이벤트를 감지하여 checkPosition() 함수가 실행되도록 하였다.
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition); //컴포넌트가 소멸할 때 화면 스크롤 감시 함수를 메모리에서 제거한다.
  }

  render() {
    return <div ref={this.setRef} />;
  }
}
