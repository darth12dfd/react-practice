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
