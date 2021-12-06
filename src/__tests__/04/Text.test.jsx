/*
  enzyme 라이브러리 능숙하게 사용하기

  1. 입력 컴포넌트는 input, label, span 엘리먼트를 출력
  2. label은 프로퍼티 label의 값을 사용
  3. 사용자 입력이 올바르지 않은 경우 input 엘리먼트 밑에 span 엘리먼트를 배치하여 오류 메시지를 출력

*/

//5. mount() 함수로 전체 출력하기

/* 
    mount() 함수는 이번 장에서 사용한 withStyles() 함수와 같은 하이어오더 컴포넌트를 출력할 때 사용한다.
*/

import React from 'react';
import { shallow } from 'enzyme'; 

import Text from '../../04/Text';

describe('<Text>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow();
  });

  it('contains <span>', () => {
    expect(shallow(<Text>테스트</Text>).dive().find('span')).toHaveLength(1);
  });
});
