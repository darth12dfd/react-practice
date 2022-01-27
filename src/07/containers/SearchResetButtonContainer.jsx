////7-5. 검색 기능 만들면서 리덕스 복습하기

///7-5-2. 검색창 만들기

///7-5-2-1. 데이터 컴포넌트 만들기

/*
    리셋 버튼 역할을 하는 데이터 컴포넌트도 작성한다.

    onPress 프로퍼티에 resetFilter 액션 함수를 전달한다. 리덕스 저장소의 검색 항목 객체가 비어 있을 경우 disabled 값을 프로퍼티로 전달하여 초기화 기능이 필요할 때만 활성화되도록 하였다.
*/

import { connect } from 'react-redux';
import { resetFilter } from '../actions/searchFilterActions';
import Button from '../../04/Button';

const mapStateToProps = state => {
  // 검색 입력 값이 없는 경우 버튼의 disabled를 true로 설정합니다.
  const disabled = Object.values(state.searchFilter).reduce(
    (result, value) => result && !value,
    true,
  );

  return {
    disabled,
  };
};

const mapDispatchToProps = {
  onPress: resetFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);