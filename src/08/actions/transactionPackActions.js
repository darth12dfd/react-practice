//import Api from '../Api';
import createActions from '../../11/api-redux-pack/createActions';//11-4-1-3. 액션 함수 수정하기

const { collection, create, reset } = createActions('transactions');


export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const resetTransactionList = reset;

const PAGE_SIZE = 10;

export function requestTransactionList(params, _page = 1){
    const meta = {
        pageNumber: _page,
        pageSize: PAGE_SIZE,
        notification: {
            success: '거래 목록을 최신 정보로 업데이트했습니다.',
            error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.',
        },
    };

    /*
    return{
        type: FETCH_TRANSACTION_LIST,
        promise: Api.get('/transactions',{ 
            params: {
                ...params,
                _page,
                _limit: PAGE_SIZE,
            },
         }),
        //11-1-4-1. meta에 오류 메시지 포함하기
        meta: {
            pageNumber: _page,
            pageSize: PAGE_SIZE,
            notification: {
                success: '거래 목록을 최신 정보로 업데이트했습니다.',
                error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.',
            },
        },
    };
    */

    return collection({
        ...params,
        _page,
        _limit: PAGE_SIZE
    }, meta);
}

export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

export function createTransaction(data,onComplete){
    const meta = {
        onSuccess: onComplete,
        notification: {
            success: '거래가 성공적으로 완료되었습니다.',
        },
    };

    /*
    return {
        type: CREATE_TRANSACTION,
        promise: Api.post('/transactions',data),
        meta: {
            onSuccess: onComplete,
            notification: {
                success: '거래가 성공적으로 완료되었습니다',
            }
        },
    };
    */
   return create(data, {}, meta);
}