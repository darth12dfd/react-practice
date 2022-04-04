//11-5. 회원 가입 기능 추가하며 마무리하기

///11-5-4. userSelectors 추가하기

import createSelectors from '../../11/api-redux-pack/createSelectors';

export const { 
    createLoadingStateSelector: userCreateLoadingStateSelector,
} = createSelectors('users');