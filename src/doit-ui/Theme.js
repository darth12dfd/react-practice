//08. 가상 코인 거래소 공용 컴포넌트 만들기

//08-1. 가상 코인 거래소 살펴보기

///08-1-1. 코인 거래소 전체 화면 설계하기

/*
    코인 거래소 전체 화면은 가장 먼저 화면 구성 컴포넌트가 있고 이는 크게 '상단 메뉴'와' 본문'으로 구분된다.

    '본문'은 다시 '상단 정보', '하단 정보', '처리 정보'로 나뉜다. '하단 정보'는 '검색 입력'과 '결과 정보'로 나뉜다. 

    상단메뉴, 본문, 상단정보, 하단 정보, 검색 입력, 결과 정보, 처리 정보 순으로 거래소를 완성하낟. 이때 반복 사용할 컴포넌트는 공용 컴포넌트로 구성한다.

    공용 컴포넌트는 UI 라이브러리를 사용하면 빠르게 구현할 수 있다. 여기서는 공용 컴포넌트를 직접 구현한다.
*/

///08-1-2. 가상 코인 거래소 요구 사항 분석하기

//// 상단 메뉴 분석하기
/*
    홈: 홈으로 돌아오기
    회원가입: 회원 가입 모달 띄우기
*/

//// 상단 정보 분석하기

/*
    코인 목록 보기: 가상 코인 목록 데이털르 받아 리스트로 보여주기
    구매하기: [구매] 버튼을 누르면 구매 관련 모달 띄우기
    판매하기: [판매] 버튼을 누르면 판매 관련 모달 띄우기
*/

//// 하단 정보 분석하기

/*
    검색 결과 목록 보기: 검색 결과 목록을 보여주기
    검색 요청 하기: 서버에 데이터 요청하기
    검색어 입려하기: 검색어 입력
*/

//// 처리 정보 분석하기

/*
    화면 알림: 서버에 처리 정보 결과 요청하기
    처리 결과 표시: 서버에 전달받은 메시지 표시하기,  xx초 뒤에 메시지 사라지게 하기
*/


//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-1. 공용 컴포넌트 스타일 파일 만들기

///08-2-1-1. 스타일 전체의 색상 및 규격을 관리하기 위한 Theme.js 파일 만들기

export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

const breakpoints = {
    [BREAKPOINT_NAMES.LARGE]: 1128,
    [BREAKPOINT_NAMES.MEDIUM]: 744,
    [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
    [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
    [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM-1]}px)`,
    
    print: `@media print`,
};

export const unit = 4;

export default {
    // 색상
    color: {
      primary: '#2196F3', // 주 색상
      primaryDark: '#1976D2',
      secondary: '#009688', // 부 색상
      secondaryDark: '#00796b',
      white: '#FFFFFF',
      gray: '#9e9e9e',
      grayLight: '#eeeeee',
      grayDark: '#616161',
      border: 'rgba(0, 0, 0, .15)',
      default: '#333333', // 기본 문자 색상
      error: '#e51c23', // 오류 색상
    },
    // 폰트 사이즈
    size: {
      h1: 48,
      h2: 36,
      h3: 28,
      xg: 24,
      lg: 18,
      md: 14,
      sm: 12,
      xs: 10,
    },
    lineHeight: {
      xg: 1.6,
      lg: 1.6,
      md: 1.5,
      sm: 1.4,
      xs: 1.4,
    },
    fontWeight: {
      bold: 'bold',
      normal: 'normal',
      light: 300,
    },
    depth: {
      level1: {
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
      },
      level2: {
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
      },
      level3: {
        boxShadow: '0 8px 17px 12px rgba(0, 0, 0, 0.14)',
      },
    },
    // 길이 단위
    unit,
    // 반응형 미디어 속성
    responsive,
  };