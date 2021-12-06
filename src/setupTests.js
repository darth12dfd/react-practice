//04-4 테스트 위주 개발 방법 사용해보기

//enzyme 라이브러리 설치하고 테스트해 보기

//1. 테스트 환경에 enzyme 추가하기

import { configure } from 'enzyme';//enzyme 설정 함수 configure()를 임포트한다.
import Adapter from 'enzyme-adapter-react-16.3';//리액트 16.3 생명주기 함수 라이브러리를 임포트한다.
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

//아르포리데트이 DOM 함수 호출 과정을 중지시킨다.
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

configure({ adapter: new Adapter() });//테스트 환경에 enzyme을 새 버전 생명 주기 함수와 함께 추가한다.

//5. 경고 메시지를 오류로 인식하도록 설정하기

/* 
    jest의 spyOn() 함수를 활용하여 경고 메시지를 오류로 인식하도록 설정할 수 있다.
    beforeEach()와 afterEach()는 jest에서 제공하는 함수로, 각 테스트 코드가 실행되기 이전과 이후에 특정 설정을 추가하고 변경된 설정을 초기화하기 위해 실행되는 함수이다.
*/

afterEach(() => {
    console.error.mockClear();//console.error() 함수 객체에 spyOn() 함수로 추가도니 가상의 감지 코드를 제거한다.
});

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation((e) => {//감시 함수 spyOn()을 사용하여 console 객체의 error() 함수를 실제 기능 대신 mockImplementation에 정의된 함수가 실행되도록 한다.
        throw new Error(e);//console.error() 함수를 실행할 때 전달된 인자로 오류를 발생시키도록 한다.
    });
});