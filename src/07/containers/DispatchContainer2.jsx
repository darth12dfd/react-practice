//7-4. 데이터를 위한 컴포넌트 알아보기

///7-4-3. 데이터 컴포넌트에 액션 연결하기

////7-4-3-5. 액션 함수 컴포넌트에 연결하기

import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent02';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection, setAge } from '../actions/collectionActions';

const mapDispatchToProps = {
    setLoading,
    resetLoading,
    setUser,
    setAge,
    setCollection,
};

export default connect(null, mapDispatchToProps)(ActionComponent);