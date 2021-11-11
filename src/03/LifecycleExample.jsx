//03-5 컴포넌트의 생명주기

//생명주기 함수의 실행 과정
import React from 'react';

class LifecycleExample extends React.Component {
  /*
        getDerivedStateFromProps() 함수는 정적 함수이다. 따라서 함수 안에서 this.props나 this.state와 같은 방법으로 프로퍼티나 state값에 접근할 수 없다.
        만약 각 값에 접근해야 하는 경우 반드시 인자로 전달된 props, state를 이용해야 한다. 이때 props는 상위 컴포넌트에서 전달된 값이며, state는 현재 컴포넌트의 state 이다.
        이 함수는 상위 컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 주로 사용되며, 반환값으로 state를 변경한다.    
    */
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }

  /*
    constructor() 함수는 이름 그대로 '맨 처음에 생성될 때 한 번만 호출'되며, 상태(state 또는 객체 변수)를 선언할 때 사용된다.
    constructor() 함수를 정의할 때는 항상 super() 함수를 가장 위에 호출해야 한다. super() 함수에는 프로퍼티와 생명 주기 상태 등을 초기화하는 중요한 과정을 포함하고 있기 때문이다.
  */
  constructor(props) {
    super();
    //getDerivedStateFromProps() 함수를 사용하므로 경고 메세지를 건너 뛰기 위해 state 초깃값을 설정한다.
    this.state = {};
    console.log('constructor 호출');
  }

  /*
    componentDidMount() 함수는 render() 함수가 JSX를 화면에 그린 이후에 호출되는 함수이다.
    만약 컴포넌트가 화면에 모두 표현된 이후 해야 하는 작업들은 여기서 하면 된다.
  */
  componentDidMount() {
    console.log('componentDidMount 호출');
    this.setState({ updated: true });
  }

  /*
    componentDidUpdate() 함수는 컴포넌트가 실제 화면에 출력된 이후 호출되는 함수이다.
    이 함수는 부모 컴포넌트로부터 전달된 이전 프로퍼티와 이전 state값과 함께 getSnapshotBeforeUpdate()함수에서 반환된 값(snapshot)을 인자로 전달받는다.
    이 값들을 이용하여 스크롤 위치를 옮기거나 커서를 이동시키는 등의 DOM 정보를 변경할 때 사용된다.
  */
  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
  }

  /*
    componentWillUnmount() 함수는 컴포넌트가 소멸되기 직전에 호출되는 함수이다.
    보통 컴포넌트에서 감시하고 있는 작업들을 해제할 때 필요한 함수이다.
    예를 들어, 컴포넌트에 setInterval() 함수가 사용되었다면 이 함수에서 setInterval()함수를 clearInterval() 함수로 해제해야 한다.
    이러한 해제 작업이 생략되면 메모리 누수 현상이 발생하여 웹 브라우저의 작동이 멈추기도 한다.
  */
  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
  }

  /*
    getSnapshotBeforeUpdate()함수는 컴포넌트의 변경된 내용이 가상 화면에 완성된 이후 호출되는 함수이다.
    이 함수는 컴포넌트가 화면에 실제로 출력되기 전에 호출되므로 화면에 출력될 엘리먼트의 크기 또는 스크롤 위치 등의 DOM 정보에 접근할 때 사용된다.
    */
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    return {};
  }

  /*
    shouldComponentUpdate()함수는 프로퍼티를 변경하거나 setState()함수를 호출하여 state 값을 변경하면 '화면을 새로 출력해야 하는지' 판단하는 함수이다.
    이 함수는 화면을 새로 출력할지 말지 판단하며, 데이터 변화를 비교하는 작업을 포함하므로 리액트 성능에 영향을 많이 준다.
    화면 변경을 위해 검증작업을 해야 하는 경우 이 함수를 사용하면 되고, forceUpdate()함수를 호출하여 화면을 출력하면 이 함수는 호출되지 않는다.
    */
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
    return false;
  }

  /*
    render() 함수는 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출되는 함수이다. render() 함수가 반환하는 JSX를 화면에 그려준다.
  */
  render() {
    console.log('render 호출');
    return null;
  }
}

export default LifecycleExample;

//생성 과정
/*
성과정은 constructor -> getDerivedStateFromProp -> render -> componentDidMount 순으로 진행된다.
생성과정의 마지막 단계인 componentDidMount() 함수에 setState() 함수를 호출하여 state를 변경했다.
*/

//변경 과정
/*
변경 과정은 shouldComponentUpdate()함수의 반환값이 true인 경우 진행되므로 변경 과정의 모든 생명주기 함수들의 호출 과정을 확인할 수 있다.
componentDidMount() 후의 변경 과정은 getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

만약 shouldComponentUpdate() 함수의 반환값이 false인 경우, 리액트 엔진은 데이터 비교 후 변경 사항이 없다라고 판단하므로 변경 과정의 생명주기 함수가 실행되지 않는다.

만약 shouldComponentUpdate() 함수의 결괏값과 상관없이 화면 동기화 과정을 진행하고 싶다면 forceUpdate() 함수를 사용한다.
결과를 보면 shouldComponentUpdate()함수의 반환값은 false이지만 변경 과정의 생명주기 함수가 모두 실행된다.
*/

//소멸과정
/*
    소멸 과정은 컴포넌트가 화면에서 생략되면 시작된다. componenetWillUnmount 함수가 실행된다.
*/
