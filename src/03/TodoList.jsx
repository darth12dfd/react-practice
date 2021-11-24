//03-8 배열 컴포넌트
//map() 함수 사용하여 배열 컴포넌트 출력하기

/*
    배열 컴포넌트의 경우 배열 요소의 개수만큼 반복하므로 성능에 많은 영향을 준다.
    따라서 배열 컴포넌트에는 키값을 key로 꼭 정의해우저야 한다.
    키값을 정의하여 출력한 배열 컴포넌트는 다시 출력해야 하는 경우 리액트 엔진이 기존의 컴포넌트를 재활용하여 성능을 높일 수 있기 때문이다.
    이때 filter(...) 함수를 추가하여 배열 항목에서 finished의 값이 false인 항목을 제외하는 등의 항목을 변형하는 경우 인덱스 번호를 키로 사용하면 키값이 함께 변경되는 문제가 생긴다. 이 문제를 해결하려면 키값으로 고유한 배열 항목을 사용하면 된다.
*/

import React from 'react';

class TodoList extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { tasKName: '공부하기', finished: true },
    ];

    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}> {todo.taskName} </div>
        ))}
      </div>
    );
  }
}

export default TodoList;

//render() 함수에서 여러 개의 JSX 노드 반환하기

/*
    render() 함수는 트리 구조의 노드를 반환한다. 그런데 리액트는 트리 구조의 노드 외에도 배열 구조의 노드를 반환할 수도 있다.
    리액트 16.3 버전까지 render() 함수는 트리 구조의 노드 1개만 반환할 수 있었다. 만약 여러 개의 노드를 반환하고 싶은 경우 의미 없는 최상위 노드를 추가해야 한다.
    리액트 16.3 버전 이후 '의미 없는 노드를 추가하는 것'이 개선되었다. React.Fragment 컴포넌트가 추가된 것이다.
    React.Fragment 컴포넌트는 여러 노드를 반환할 때 사용될 뿐이다. 즉, 이 컴포넌트는 HTML로 변환되지 않는다.
*/
