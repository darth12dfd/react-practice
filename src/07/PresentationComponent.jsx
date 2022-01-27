//7-4. 데이터를 위한 컴포넌트 알아보기

/*
    리덕스 역시 리덕스의 스토어 데이터도 소비자가 구독하듯이 만들 수 있다. 

    예를 들어 react-redux 공급자에 스토어를 전달하여 getState(), dispatch()와 같은 함수를 연결하여 사용할 수 있다.

     하지만 리덕스 함수를 포함한 컴포넌트를 다른 앱에서 재사용할 때 리덕스 스토어를 동일하게 구성해야 한다는 문제가 있다.

     리액트는 컴포넌트를 쉽게 재구성하고 공유하기 편하다. 그렇기에 컴포넌트가 항상 리덕스를 끌어안고 있으면 이런 장점이 많이 흐려진다.
*/

///7-4-1. 화면 컴포넌트와 데이터 컴포넌트 구분하기

/*
    화면 컴포넌트
        - 컴포넌트를 화면에 출력하는데 집중
        - 프로퍼티를 통해 데이터를 전달 받기만 함
        - 데이터의 변경은 프로퍼티로 전달받은 콜백 함수를 호출하거나 state를 사용한다.
    데이터 컴포넌트
        - 스토어의 데이터를 컴포넌트에 전달하거나 변경하는데 집중
        - react-redux 공급자의 스토어를 연결하여 데이터를 관리한다. 즉, 리덕스와 깊은 연관이 있다.
        - 스토어의 리듀서와 dispatch() 함수를 화면 컴포넌트에 프로퍼티로 전달한다.
        - react-redux의 공급자를 구독하는 소비자 컴포넌트 형태를 가진다.

    위와 같이 화면 컴포넌트와 데이터 컴포넌트를 구분하면 화면 컴포넌트는  화면에 필요한 요소만 포함되어 있으므로 리덕스와 상관없이 사용할 수 있고, 데이터 컴포넌트는 리덕스 스토어를 포함하고 있으므로 리덕스를 고려하여 사용해야 한다.
*/

///7-4-2. 데이터 컴포넌트와 화면 컴포넌트 출력하기

/*
    화면 컴포넌트는 지금까지 구현한 컴포넌트와 다른 점이 없다. 다만 데이터 컴포넌트는 react-redux 라이브러리에서 제공하는 하이어오더 컴포넌트 생성 함수 connet()를 사용하여 만든다.

    connect() 함수는 하이어오더 컴포넌트 생성 함수이므로 화면 컴포넌트를 재활용할 수 도 있다. 화면 컴포넌트를 만든 다음 이를 활용하여 데이터 컴포넌트를 만들어 본다.
*/

////7-4-2-1. 화면 컴포넌트 만들기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PresentationComponent extends PureComponent {
    render() {
        const { userName, entity } = this.props;
        return(
            <div>
                이름: {userName}
                선택된 항목: { entity && `name: ${entity.name}, age:${entity.age}`}
            </div>
        );
    }
}

PresentationComponent.propTypes = {
    userName: PropTypes.string,
    entity: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
    }),
};

export default PresentationComponent;