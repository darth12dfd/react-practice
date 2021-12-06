//04-4 테스트 위주 개발 방법 사용해보기

/*
    작성한 코드가 제대로 기능하는지 확인하기 위해 작성하는 코드를 '테스트코드'라 하고, 수행 기능을 작성하기 전에 테스트 코드부터 작성하는 개발 방법을 '테스트 위주 개발'이라고 한다.
    많은 개발자들이 코드의 품질을 향상하기 위해 이 방법을 사용한다. 팀원과 협업 작업 시 내가 작성한 코드를 다른 사람이 수정했을 때 '원래 기능이 고장나지 않게' 보호할 수 있기 때문이다.
    또한 기존에 작성한 코드가 변경된 기능에도 정상적으로 작동하는지 검증할 때에도 사용한다.
*/

//리액트의 기본 테스트 환경 jest 도구 사용해보기
//1. 테스트 코드 작성하기
/*
import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

//enzyme 라이브러리 설치하고 테스트하기
//3. 간편한 출력 테스트를 도와주는 shallow() 함수

/* 
  shallow() 함수는 컴포넌트의 자식 컴포넌트를 생성하거나 출력하는 과정을 건너뛰고 현재 컴포넌트의 생명주기만을 테스트한다. 
  toThrow() 함수는 컴포넌트의 오류를 검사한다. 예를 들어 프로퍼티로 전달받은 콜백 함수를 실행하도록 컴포넌트를 구성했을 때, 콜백 함수를 프로퍼티로 전달하는 과정에서 생략되는 경우에는 에러가 발생한다.
  not.toThrow() 함수는 이러한 에러가 나타나는지 검증하는 함수이다. 만약 추가한 필수 프로퍼티 항목이 다른 코드에 영향을 주는지 확인하고 싶다면 모든 테스트 코드에 이 과정을 포함시키면 된다.
  그러면 toThrow()에서 오류 발생 지점을 알려주므로 편리하게 오류를 수정할 수 있다.


describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="test_name" />); //shallow() 함수 안에 Input 컴포넌트를 직접 넣어준다.
    }).not.toThrow(); //jest의 toThrow() 함수를 사용하여 입력 컴포넌트가 출력되는 동안 오류가 발생하는지 검사하고 오류가 발생하지 않으면 테스트를 통과한다.
  });

  //4. expect() 함수로 결괏값 검증하기

  //jest의 검사함수인 expect()는 특정 변수를 비교하거나 함수를 실행하여 발생한 결괏값을 검증한다.
  //expect() 함수를 사용하여 shallow() 함수가 반환하는 객체의 수를 검증해본다.
  it('has one element', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1); //expect() 함수가 반환한 toEqual() 함수를 사용하여 반환된 객체의 수를 비교한다.
    expect(wrapper).toHaveLength(1); //expect() 함수가 반환한 toHaveLength() 함수를 사용하여 .length 값을 비교한다.
  });
});

/*
    파일을 저장하고 테스트 환경을 구동하면 경고메시지가 나타난다. 
    필수 프로퍼티 name이 Input 컴포넌트로 전달되지 않았기 때문에 테스트가 제대로 통과되지 않았다.
*/

/*
  enzyme 라이브러리 능숙하게 사용하기

  1. 입력 컴포넌트는 input, label, span 엘리먼트를 출력
  2. label은 프로퍼티 label의 값을 사용
  3. 사용자 입력이 올바르지 않은 경우 input 엘리먼트 밑에 span 엘리먼트를 배치하여 오류 메시지를 출력

*/

import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

//1. find 함수로 엘리먼트 출력 검사하기
describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });

  describe('contains <input>', () => {
    it('renders one input', () => {
      const wrapper = shallow(<Input name="test_name" />); //shallow 함수는 컴포넌트를 출력한 후 컴포넌트를 검사할 수 있는 enzyme 객체를 반환한다. enzyme 객체는 find() 함수를 포함하고 있다.
      expect(wrapper.find('input')).toHaveLength(1); //find() 함수의 인자로 'input' 을 전달하여 출력된 DOM에서 input 엘리먼트를 찾는다. toHaveLength()함수로 반환된 엘리먼트의 개수를 검증한다.
      expect(wrapper.find('label')).toHaveLength(1);
    });
  });

  //2. prop(), props() 함수로 프로퍼티에 전달된 값 검증하기
  it('assigns the prop value and type', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    expect(wrapper.find('input').prop('value')).toBe(expectedValue); //prop() 함수를 사용하여 value의 프로퍼티값과 컴포넌트에 전달된 값(expectedValue)을 검증한다.
    const { type, value } = wrapper.find('input').props(); //객체 추출식을 사용해 필요한 프로퍼티 항목을 추출한다.
    //props() 함수에서 추출한 value, type의 프로퍼티(에트리뷰트)값을 검증한다. 위에서 추찰한 값과 같으며 검증 표현법이 다르다.
    expect(value).toBe(expectedValue);
    expect(type).toBe('text');
  });

  /*
    prop() 함수는 enzyme 객체가 반환한 컴포넌트에 확인하고자 하는 프로퍼티의 이름을 인자로 전달한다. 그러면 해당 프로퍼티의 값을 추출하여 반환한다.
    props() 함수는 전체 프로퍼티값들을 객체로 반환하므로 여러 개의 프로퍼티에 대한 작업을 할 수 있다.
    만약 이 부분에서 오류가 발생했다면 Input 컴포넌트 코드에 기본 프로퍼티값을 선언하지 않았거나 잘못된 값을 입력했을 가능성이 높다.
  */

  //3. setProps() 함수로 변경된 프로퍼티값 전달하기

  /*
    프로퍼티는 컴포넌트에서 변경할 수 없으나, 구현된 컴포넌트의 생명주기 함수 코드를 검증하거나 변경된 값에 맞춰 화면 출력 state를 검증하려면 프로퍼티의 값을 바꿔야 한다.
    이를 기존의 테스트코드로 구현하려면 state를 포함한 상위 컴포넌트를 구성하고, 상위 컴포넌트의 state를 변경하여 테스트하려는 컴포넌트의 프로퍼티로 전달하는 등의 불피룡한 과정을 구현해야한다.
    하지만 enzyme은 프로퍼티의 값을 변경할 수 있도록 setProps() 함수를 제공한다. setProps() 함수를 사용하면 불필요한 구현 과정을 생략할 수 있다.
  */

  it('renders errorMessage', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('.error')).toHaveLength(0); //error 스타일을 포함한 오류 메시지가 존재하는지 검사한다.
    const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
    wrapper.setProps({ errorMessage: expectedErrorMessage }); //setProps() 함수로 errorMessage 프로퍼티의 값을 변경한다.
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1); //errorMessage 프로퍼티가 추가되었기 때문에 error 스타일을 포함한 오류 메시지 1개가 정상적으로 포함된 것을 확인한다.
    expect(wrapper.html()).toContain(expectedErrorMessage); //html() 함수를 사용하여 출력된 HTML에서 실제 오류 메시지가 정상적으로 출력되었는지 검증한다.
  });

  //4. simulate() 함수로 가상의 이벤트 검사하기
  /*
    enzyme은 가상 이벤트를 작동시킬 수 있는 simulate() 함수를 제공한다. 이를 이용하여 이벤트에 반응하는 콜백 함수가 정상적으로 동작하는지 검사한다.
    Input 컴포넌트의 요구사항 중 'input' 엘리먼트의 값이 변경될 때 onChange 콜백 함수를 호출한다'를 검사해 본다.
  */

  it('calls back onChange on input change', () => {
    const changeStub = jest.fn(); //jest는 감시 함수(fn())을 제공하여 생성된 함수의 호출을 감시하는 방법을 제공한다.
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />); //생성된 감시 함수를 입력 컴포넌트의 onChange 프로퍼티에 할당한다.
    expect(changeStub).not.toHaveBeenCalled(); //이벤트 재현 시점을 기준으로 이벤트 실행 이전에는 콜백 함수가 호출되지 않은 상태를 expect() 함수의 호출 검증 메서드 toHaveBeenCalled()로 검증한다.
    const expectedTargetValue = 'updated input';
    wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } }); //enzyme의 이벤트 재현 메소드를 사용하여 input값이 변경되는 이벤트(onChange)를 재현한다. 재현을 위해 실제 브라우저에서 전달할 값을 전달해야 한다. targe.value에 값이 전달되므로 객체형으로 가상의 입력값을 전달한다.

    //fn() 함수로 반환된 콜백함수 expect() 함수의 호출 검증 메서드로 호출 횟수와 호출 인자들을 검사한다.
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
  });
});
