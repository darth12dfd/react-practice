//리액트의 기본 테스트 환경 jest 도구 사용해보기

//2. 경고 메시지 확인하기

import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../03/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="name" />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(React.isValidElement(<Input name="name" />)).toBeTruthy();
  });
});
