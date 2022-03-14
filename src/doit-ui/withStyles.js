//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-1. 공용 컴포넌트 스타일 파일 만들기

///08-2-1-2. withStyles 하이어오더 컴포넌트 만들기

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(Theme);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };