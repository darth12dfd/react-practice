//11-3. 셀렉터로 스토어 데이터 변환하기

/*
    지금까지는 스토어 데이터를 컴포넌트에 전달하기 위해 mapStateToProps() 함수와 데이터 컴포넌트를 조합했다.
    
    그런데 이 방식은 스토어 데이터의 값을 변환하거나 추출하는 등의 작업이 필요해지면 mapStateToProps() 함수에 작성한 작업 코드를 전체적으로 수정해야 하기에 유지 보수 측면에서 불편한 점이 많다.
*/

///11-3-1. 셀렉터로 mapStateToProps() 함수의 반복 수정 작업 줄이기

/*
    셀렉터는 변경된 스토어 데이터를 화면에 필요한 형태로 변환 및 추출하는 함수를 말한다. 셀렉터를 도입하면 mapStateToProps() 함수의 스토어 데이터 변환 및 추출 작업을 간단히 대체할 수 있다.

    기본적으로 셀렉터는 스토어와 컴포넌트 사이에 위치하며, 셀렉터는 스토어 데이터의 값을 받아 변환, 추출 등의 작업을 한 다음 반환한 값을 컴포넌트로 넘겨준다.
*/

///11-3-2. 가상 코인 거래소에 셀렉터 도입하기

////11-3-2-1. 셀렉터 생성하기

/*
    목록을 요청할 때 사용한 데이터 컴포넌트들의 mapStateToProps() 함수에 있던 작업들을 셀렉터로 대체한다.
*/

/*
import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from "../actions/transactionPackActions";

import { createSelector } from "reselect";

export const transactionsSelector = state => state.transactions;//스토어 데이터에서 거래 정보를 추출하는 셀렉터

*/
/*
export const transactionListSelector = (state) => {
    const { ids, entities } = transactionsSelector(state);
    return ids.map(id => entities[id]);
};//그래프 DB 구조의 거래 목록 자료를 원본 배열로 변환하는 셀렉터이다.
*/

//11-3-3-1. 가상 코인 거래소에 리셀렉트 도입하기

/*
    리셀렉트는 기존의 셀렉터와 createSelector() 함수를 사용하여 셀렉터를 만든다.

    기존의 셀렉터에는 그래프 DB 구조를 원본 배열로 변환하는 데이터 변환 작업이 포함되어 있다. 이 작업은 mapStateToProps() 함수를 호출하면 매번 실행되기에 만약 변환 작업이 완료된 값을 저장할 수 있다면 이 문제를 해결 할 수 있다.

    변환 작업 이후 같은 입력값이 들어오면 변환 작업을 다시 진행하는 게 아니라 캐시에 저장되어 있는 값을 바로 사용한다. 리셀렉트는 실제로 이 과정을 담당하여 변환 작업에 필요한 시간을 줄여준다.
*/

/*
export const transactionListSelector = createSelector(
    [transactionsSelector],
    (transactions) => {
        const { ids, entities } = transactions;
        return ids.map(id => entities[id]);
    }
);
*/
/*
    위의 코드에서 createSelector() 함수의 첫 번째, 두 번째 인자에 주목한다. 첫 번째 인자는 셀렉터 배열이며, 두 번재 인자는 셀렉터가 반환한 값을 이용하는 변환 작업 함수이다.

    transactionsSelector가 반환하 값이 transactions에 매칭된다고 생각하면 이해하기 쉬울 것이다.
*/

/*
export const loadingStateSelector = state => transactionsSelector(state).loadingState;//거래 정보의 전체 로딩 정보 객체를 추출하는 셀렉터이다.

export const transactionListLoadingStateSelector = state => loadingStateSelector(state)[FETCH_TRANSACTION_LIST];//전체 거래 목록 요청의 로딩 상태만을 추출하는 셀렉터이다.

export const transactionCreateLoadingStateSelector = state => loadingStateSelector(state)[CREATE_TRANSACTION];//거래 생성 요청의 로딩 상태만을 추출하는 셀렉터
*/

//11-4-3-2. transactionSelectors 수정하기

import createSelectors from '../../11/api-redux-pack/createSelectors';

export const {
  resourceSelector: transactionsSelector,
  entitiesSelector: transactionEntitiesSelector,
  pagesSelector: transactionPagesSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors('transactions');