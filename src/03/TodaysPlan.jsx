//컴포넌트의 개념
//기존의 웹 프레임워크는 MVC 방식으로 정보,화면, 구동 코드를 분리하여 관리했다. 정보 담당을 모델(Model), 화면 담당을 뷰(View), 구동 담당을 컨트롤러(Controller)라고 부른 것에서 MVC 라는 용어가 나왔다.
//이 방식은 코드 관리를 효율적으로 할 수 있다는 장점이 있으나 MVC 각 요소의 의존성이 높아 재활용이 어렵다.

//하지만 웹 사이트의 화면은 각 요소가 비슷하고 반복적으로 사용한 경우가 많다. 이점을 착안하여 컴포넌트가 등장하게 된 것이다.
//컴포넌트는 MVC의 뷰를 독립적으로 구성하여 재사용도 할 수 있고 컴포넌트를 통해 새로운 컴포넌트를 쉽게 만들 수도 있다.

import React from 'react';

class TodaysPlan extends React.Component {
  render() {
    return <div className="message-container">놀러가자</div>;
  }
}

export default TodaysPlan;
