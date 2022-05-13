//12-3. 주소와 리덕스 연결하기

//12-3-1. 가상 코인 거래소의 검색 결과 화면 공유하기

//12-3-1-3. 주소 동기화 컴포넌트 작성하기

import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setLocation } from "../actions/routerActions";
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';

class RouterState extends React.PureComponent {
    componentDidMount(){
        const { setLocation, location } = this.props;
        setLocation(location);
    }

    componentDidUpdate(){
        const { setLocation, location } = this.props;
        setLocation(location);
    }

    render(){
        return null;
    }
}

RouterState.propTypes = {
    setLocation: PropTypes.func,
    location: PropTypes.object,
};

export default compose(connect(null, { setLocation }), withRouter)(RouterState);

/*
const Connection = (connect(null, { setLocation }))(RouterState);
export default <BrowserRouter>{ withRouter(Connection) }</BrowserRouter>;
*/
