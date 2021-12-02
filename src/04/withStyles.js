//04-3 스타일 컴포넌트 만들기

//react-with-styles로 스타일을 적용한 Text 컴포넌트 만들기
//2. 공동 스타일 컴포넌트 함수 만들기

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';//1. react-with-styles의 테마 관리자를 임포트한다.
import aphroditeInterface from 'react-with-styles-interface-aphrodite';//2. 서버 출력을 도와주는 아프로디테 라으비러리의 react-with-styles의 버전을 임포트한다.
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';//3. react-with0styles에서 사용하는 함수를 임포트한다.
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme);//2번에서 제작한 테마 파일을 등록한다.
ThemedStyleSheet.registerInterface(aphroditeInterface);//아프로디테를 react-with-styles의 테마 관리자에 적용한다.

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;