//11-5. 회원 가입 기능 추가하며 마무리하기

///11-5-2. 회원가입 액션 추가하기

import createActions from '../../11/api-redux-pack/createActions';

const { create } = createActions('users');
export function createUser(data, onComplete){
    return create(
        data,
        {},
        {
            notification: { success: '회원 가입이 성공적으로 완료되었습니다.'},
            onSuccess: onComplete,
        },
    );
}