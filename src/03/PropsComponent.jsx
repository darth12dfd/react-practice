//03-3 컴포넌트에 데이터를 전달하는 프로퍼티

//프로퍼티 기초 알아보기
//프로퍼티는 컴포넌트에서 또 다른 컴포넌트로 전달할 때 속성 형태로 전달되는 값을 지칭한다.
//이때 프로퍼티는 상위 컴포넌트에서 하위 컴포넌트로 전달된다. 이를 "단방향으로 데이터가 흐른다"라고 표현한다.

//프로퍼티 사용 방법
//프로퍼티에서는 자바스크립트의 자로형을 모두 사용할 수 있다. 이때 프로퍼티의 자료형은 미리 선언해주는 것이 좋다.
//프로퍼티의 자료형을 미리 선언함녀 리액트 엔진이 프로퍼티로 전달하는 값의 변화를 효율적으로 감지할 수 있고, 휴먼 에러로 인한 버그를 예방하는 데에도 도움이 된다.

//문자열형 프로퍼티 사용하기
import React from 'react';
import PropTypes from 'prop-types'; //prop-types 라이브러리를 PropTypes라는 이름으로 임포트 한다.

class PropsComponent extends React.Component {
  render() {
    return <div className="message-container">{this.props.name}</div>; //name 프로퍼티로 받은 문자열을 출력한다.
  }
}

//자료형을 선언하는 예제
PropsComponent.propTypes = {
  //PropComponent의 propTypes라는 특수 변수를 사용하여 프로퍼티의 자료형을 정의한다.
  name: PropTypes.string, //프로퍼티의 자료형을 객체 형태로 지정하여 PropsComponent.propTypes에 저장했다.
};

export default PropsComponent;
