//7-4. 데이터를 위한 컴포넌트 알아보기

///7-4-3. 데이터 컴포넌트에 액션 연결하기

////7-4-3-2. 데이터 컴포넌트 작성하기

import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';//7-4-3-1 과정에서 만든 화면 컴포넌트를 임포트한다.

import { setAge } from '../actions/collectionActions';//SET_AGE 액션 타입을 호출하는 setAge() 함수를 임포트한다.

const mapDispatchToProps = {
    setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);

/*
     connect() 함수는 이 mapDispatchToProps() 함수가 반환하는 객체를 재활용 컴포넌트의 프로퍼티로 변환하여 전달한다.

     setAge 키가 곧 dispatch() 함수를 호출하는 것이므로 store.dispatch(setAge(id,age))를 실행하게 된다.
*/