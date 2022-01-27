////7-5. 검색 기능 만들면서 리덕스 복습하기

///7-5-2. 검색창 만들기

///7-5-2-1. 데이터 컴포넌트 만들기

/*
    props.name에는 검색 항목 키(name, page, ...)가 전달된 것이며, searchFilter라는 검색 항목 객체이므로 state.searchFilter[props.name]은 해당 검색 항목의 입력값일 것이다.

    이를 반환하여 Input컴포넌트의 프로퍼티로 전달한다. 이때 onChange 프로퍼티로 setFilter 액션 함수를 전달하여 입ㅂ력값이 변경될 때 저장소의 검색 항목값을 변경한다.
*/

import { connect } from 'react-redux';
import { setFilter } from '../actions/searchFilterActions';
import Input from '../../04/InputWithStyle';

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || '';

  return {
    value,
  };
};

const mapDispatchToProps = {
  onChange: setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
