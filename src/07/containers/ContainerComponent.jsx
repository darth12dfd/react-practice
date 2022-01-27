//7-4. 데이터를 위한 컴포넌트 알아보기

///7-4-2. 데이터 컴포넌트와 화면 컴포넌트 출력하기

////7-4-2-2. connect() 함수로 데이터 컴포넌트 생성하기

/*
    connect() 함수의 첫 번째 인자로는 mapStateToProps() 함수, 두 번째 인자로는 mapDispatchToProps() 함수를 전달해야 한다.

    mapStateToProps() 함수는 데이터 컴포넌트에서 필요한 데이터를 스토어에서 추출하여 객체를 반환하는 역할을 한다.

    connect() 함수는 이 객체를 이용하여 이 후 재사용되는 컴포넌트의 프로퍼티에 전달해준다. 여기서는 변경 요청을 포함하지 않으므로 mapDispatchToProps() 함수는 구현하지 않는다.
*/

import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

const mapStateToProps = (state, props) => {
    return {
        userName: state.user.name,//스토어의 user 객체의 name 항목에 접근하여 userName 프로퍼티 값으로 변환한다.
        entity: state.collection.entities[props.id],//데이터 컴포넌트에 프로퍼티로 전달된 id값을 참조하여 그래프 DB의 자료를 추출한다.
    };
};

export default connect(mapStateToProps)(PresentationComponent);

