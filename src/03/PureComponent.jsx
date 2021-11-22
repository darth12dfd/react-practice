//03-6 클래스형 컴포넌트

//PureComponent 알아보기

/*
    PureComponent 클래스는 Component 클래스를 상속받은 클래스이다. PureComponent 클래스는 shouldComponentUpdate() 함수를 '얕은 비교'를 하도록 재정의했다.
    즉, PureComponent 클래스로 만들어진 컴포넌트는 '얕은 비교를 통해 데이터가 변경된 경우'에만 render() 함수를 호출한다. 반면 Component 클래스로 만들어진 컴포넌트는 항상 render() 함수를 호출한다.

*/

import React from 'react';
import shallowEqual from 'shallow-eqaul';

export class PureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
}

//얕은 비교

/*
    깊은 비교를 하는 === 의 경우는 같은 요소를 가지고 있다 할지라도 새롭게 정의된 배열인 경우 false를 출력한다.
    shallowEqual() 함수를 사용하면 얕은 비교를 할 수 있다. 즉 요소들이 모두 같은 내용인 경우 true를 출력한다.
    하지만 비교하는 요소들 중 다른 객체가 있는 경우는 그 객체에 있는 값들이 동일할 지라도 shallowEqual() 함수를 쓴 경우 false를 출력한다.
*/
