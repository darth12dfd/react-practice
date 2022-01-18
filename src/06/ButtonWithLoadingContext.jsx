//06-1. 컴텍스트의 기초 개념 알아보기

//4. 소비자를 하이어오더 컴포넌트로 구현하기

//4-2. 하이어오더 컴포넌트로 소비자 만들기

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContext from './withLoadingContext';

function ButtonWithLoadingContext({ label, loading, setLoading }) {
  return (
    <Button onPress={() => setLoading(!loading)}>
      {loading ? '로딩중' : label}
    </Button>
  );
}

ButtonWithLoadingContext.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default withLoadingContext(ButtonWithLoadingContext);//4-1에서 만든 하이어오더 컴포넌트에 Button 컴포넌트를 인자로 전달하여 소비자를 구현한다.