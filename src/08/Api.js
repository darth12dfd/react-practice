//09-2. 데이터 요청을 위한 axios 라이브러리 도입하기

//09-2-1. REST API

/*
    REST API는 쉽게 말해서 웹 주소를 이용하여 서버와 통신하는 방법 중 하나이다.

    주소를 입력하는 방법으로 데이터를 생성하거나 요청, 변경, 삭제를 수행한다.

    주소를 입력할 때 4가지 작업을 처리해야 하므로 주소를 입력하는 방식에 약속을 정한 것이다. 다음은 REST API의 4가지 함수를 CRUD 표현에 맞게 구분한 것이다.

    REST API 함수 | CRUD 표현 | 주소 입력 방식
    POST | Create | /transactions |
    GET | Read | /transactions 또는 get/transactions/4 |
    PUT | Update | /transactions/3 |
    DELETE | Delete | /trasctions/3 |

    GET의 경우 주소 입력 방식이 2종류 이다. 목록을 불러올 경우 /transactions와 같이 입력하고, 단일 항목을 불러오는 경우 /transactions/4와 같이 필요한 항목의 단서를 하나 더 추가하여 입력한다.
*/

//09-2-2. axios 설치하고 가상 코인 거래소에 적용하기

///09-2-2-5. 자주 사용하는 API 프로젝트에 등록하기

import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:4000/',
});

export default Api;