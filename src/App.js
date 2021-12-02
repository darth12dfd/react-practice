/*03-2 컴포넌트와 구성 요소
import React from 'react';
//작성한 컴포넌트를 불러들인다.
import TodaysPlan from './03/TodaysPlan';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan />
      </div>
    );
  }
}

export default App;

//컴포넌트 구성 요소
//프로퍼티: 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터
//state: 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터
//컨텍스트: 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터.
*/

//03-3 컴포넌트에 데이터를 전달하는 프로퍼티

//PropsComponent를 화면에 그리는 코드
/*
import React from 'react';
import PropsCompnent from './03/PropsComponent';

class App extends React.Component {
  render() {
    return <PropsCompnent name="두잇 리액트" />;
  }
}

export default App;
*/

//ChildComponents를 화면에 그리는 코드
/*
import React from 'react';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    const array = [1, 2, 3];
    const obj = { name: '제목', age: 30 };
    const node = <h1>노드</h1>;
    const func = () => {
      console.log('메시지');
    };
    return (
      <ChildComponent
        boolValue={true} //불리언 값 전달
        numValue={1} //숫자 전달
        //arrayValue={[1, 2, 3]} //배열 전달
        //objValue={{ name: '제목', age: 30 }} //객체 전달
        //nodeValue={<h1>노드</h1>} //노드 전달
        /*
        funcValue={() => {
          console.log('메시지');
        }} //함수 객체 전달
        
        //중괄호 2개를 쓰는 것보단 변수에 담아서 전달하는 방법을 택한다.
        arrayValue={array}
        objValue={obj}
        nodeValue={node}
        funcValue={func}
      />
    );
  }
}

export default App;
*/

//BooleanComponent 화면에 그리기
/*
import React from 'react';
import BooleanComponent from './03/BooleanComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <b>지루할 때:</b>
          <BooleanComponent bored />
        </div>
        <div>
          <b>즐거울 때:</b>
          <BooleanComponent />
        </div>
      </div>
    );
  }
}

export default App;
*/

//ChildComponent2 컴포넌트를 화면에 그리기
/*
import React from 'react';
import ChildComponent2 from './03/ChildComponent2';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent2 objValue={{ age: 20 }} requiredStringValue="문자" />
      </div>
    );
  }
}

export default App;
*/

//DefaultPropsComponent 화면에 그리기
/*
import React from 'react';
import DefaultPropsComponent from './03/DefaultPropsComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <DefaultPropsComponent />
      </div>
    );
  }
}

export default App;
*/

//자식 프로퍼티 사용하기
//App 컴포넌트에 포함시킨 ChildProperty 컴포넌트 하위에 자식 노드를 배치한다.
/*
import React from 'react';
import ChildProperty from './03/ChildProperty';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildProperty>
          <div>
            <span>자식노드</span>
          </div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;
//결과를 확인해보면 ChildProperty 컴포넌트에 있는 {this.props.children} 위치에 <div><span>자식노드</span></div>가 출력된다.
*/

//03-4. 컴포넌트 상태 관리하기

//StateExample 컴포넌트 화면에 그리기
/*
import React from 'react';
import StateExample from './03/StateExample';

class App extends React.Component {
  render() {
    return (
      <div>
        <StateExample />
      </div>
    );
  }
}

export default App;
*/

//forceUpdateExample 컴포넌트 화면에 그리기
/*
import React from 'react';
import ForceUpdateExample from './03/ForceUpdateExample';

class App extends React.Component {
  render() {
    return (
      <div>
        <ForceUpdateExample />
      </div>
    );
  }
}

export default App;

*/

//03-5 컴포넌트의 생명주기
//LifecycleExample 컴포넌트 화면에 그리기
/*
import React from 'react';
import LifecycleExample from './03/LifecycleExample';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false };
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }

  render() {
    return (
      <div>
        <div>{this.state.hasDestroyed ? null : <LifecycleExample />}</div>
      </div>
    );
  }
}

export default App;
*/

//카운터 프로그램 만들며 생명주기 함수 사용해보기
//3. NewCounter 컴포넌트와 Counter 컴포넌트 화면에 그리기
/*
import React from 'react';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }

  render() {
    return (
      <div>
        <div>
          <Counter count={this.state.count} />
        </div>
        <div>
          <NewCounter count={this.state.count} />
        </div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
      </div>
    );
  }
}

export default App;

//리액트 서버를 구동해보면 두 컴포넌트 모두 App 컴포넌트의 this.sate.count로 프로퍼티를 초기화한다. 즉, 동일한 숫자 부터 카운트 한다.
//두 컴포넌트 모두 [카운트 증가] 버튼을 누르면 숫자가 1씩 올라가며 정상적으로 작동한다. 그런데 [20으로 초기화] 버튼을 누르면 Counter 컴포넌트의 숫자는 20으로 초기화되지 않는다.
// NewCounter 컴포넌트만 getDerivedStateFromProps() 함수로 App 컴포넌트부터 갱신된 프로퍼티값을 동기화했기 때문이다. Counter 컴포넌트는 처음 생성될 때만 프로퍼티 값으로 state값을 설정하므로 갱신과정에서는 state값이 변경되지 않았다.

*/

//03-8. 배열 컴포넌트
//ListExample 함수 화면에 그리기
/*
import React from 'react';
import ListExample from './03/ListExample';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <ListExample />
      </div>
    );
  }
}

export default App;
*/

//TodoList 컴포넌트 화면에 그리기

/*
import React from 'react';
import TodoList from './03/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <TodoList />
      </div>
    );
  }
}

export default App;

*/

//03-9 컴포넌트에서 콜백함수와 이벤트 처리하기

/*
    프로퍼티를 사용하면 상위 컴포넌트의 데이터를 하위 컴포넌트에 전달할 수 있다. 그렇기에 하위 컴포넌트에서 프로퍼티를 변경할 때는 프로퍼티 원본을 수정할 수 있는 함수를 하위 컴포넌트에 제공하면 된다.
    콜백 함수란 정의된 위치에서 실행되지 않고, 이후 특정 상황(이벤트, 다른 함수 호출 등)에서 실행되는 함수를 말한다. 즉, 콜백 함수를 프로퍼티로 전달하면 된다.
*/

//콜백 함수로 프로퍼티 수정해보기
/*
import React from 'react';
import Counter2 from './03/Counter2';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return <Counter2 count={this.state.count} onAdd={this.increaseCount} />;
  }
}

export default App;
*/

//위의 코드로 작성한 뒤 [카운트 증가]를 눌러도 제대로 작동되지 않는데 콘솔창을 열어보면, 아래와 같은 오류 메시지가 뜬다.

//Uncaught TypeError: this.setState is not a function

/*
  이 오류메시지는 Counter2 컴포넌트에서 프로퍼티로 받아 실행한 onAdd() 함수에서 참조하는 this의 범위 때문에 발생한 것이다.
  onAdd() 함수에 구현되어 있는 this.setState()는 상위 컴포넌트에 정의되어 있는데 하위 컴포넌트(Counter2)에서 실행되기 때문이다.
  이렇게 콜백 함수를 프로퍼티 데이터로 전달하는 경우에는 하위 컴포넌트에서 참조할 this 범위에 대한 오류를 주의해야 한다. 이문제는 bind() 함수로 해결하면 된다.
*/

//bind() 함수로 this 범위 오류 해결하기

/*
import React from 'react';
import Counter2 from './03/Counter2';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return <Counter2 count={this.state.count} onAdd={this.increaseCount.bind(this)} />;
    //increaseCount() 함수가 호출되는 this 범위가 App 컴포넌트에 묶인 것이다.
  }
}

export default App;

*/

//Counter3 컴포넌트 화면에 그리기

/*
import React from 'react';
import Counter3 from './03/Counter3';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter3 />
      </div>
    );
  }
}

export default App;
*/

//04-2 CSS로 컴포넌트 스타일 적용하기

//App 컴포넌트에 머터리얼 디자인 요소 추가해보기 및 materialize.css 파일 추가하기

import React, { Component } from 'react';
//import './materialize.css';
import './App.css';
import './sass/materialize.scss';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <h1>머터리얼 CSS</h1>
      </div>
    );
  }
}

export default App;