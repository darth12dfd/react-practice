//05-3. 하이어오더 컴포넌트 라이브러리 사용하기

//3. lifecycle() 함수로 함수형 컴포넌트에 생명주기 함수 추가하기

//3.1 lifecycle() 함수로 최초 생성 시 데이터 요청하기

import React from 'react';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import withLoading from './withLoading';

function Page({ content }){//lifecycle() 함수 안의 this.state.content 값을 프로퍼티로 전달한다.
    return (
        <div>
            페이지 로딩이 완료되었습니다.
            {content}
        </div>
    );
}

export const withLoadData = lifecycle({
    state: { isLoading: true, content: ''},//state의 초깃값을 정의한다.
    componentDidMount: function(){
        if(this.props.loadData){//loadData 프로퍼티에 함수가 할당되지 않으면 오류가 발생하므로 프로퍼티에 loadData() 함수가 선언된 경우에만 함수가 실행되도록 만들었다.
            this.props.loadData().then(content => this.setState({ isLoading: false, content}));//로딩이 완료되면 loading을 false로, 결과 화면을 content에 저장한다.
        }
    },
});

export const PageWithLoadData = withLoadData(Page);//lifecycle() 함수로 만든 하이어오더 컴포넌트 생성 함수를 Page 컴포넌트에 적용한다.
export const PageWithLoadDataAndLoading = compose(withLoadData, withLoading('서버 요청 중'))(Page);//compose() 함수로 하이어오더 컴포넌트 생성 함수를 묶은 다음 Page 컴포넌트에 적용한다.