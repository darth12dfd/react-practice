//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-1. 앱 전체 화면 구성하기

///08-3-1-3. CoinApp 컴포넌트 만들기

///09-5-1-3. 가상 코인 거래소에 모달 공급자 추가하기

import React, { PureComponent } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';//12-1-1.Route 컴포넌트 사용하기
import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/NotificationContainer';
import NotFound from './components/NotFound';
import RouterStateContainer from './containers/RouterStateContainer';

//import CoinOverview from './components/main/CoinOverview';
//import TransactionListContainer from './containers/main/TransactionListContainer';

class CoinApp extends PureComponent {
    store = configureStore();
    
    render(){
        return (
            <Provider store = { this.store }>
                <Router>
                    <RouterStateContainer />
                    <ModalProvider>
                        <AppLayout>
                            <Switch>
                                <Route path ="/" exact render = {() => <MainPage /> }/>
                                <Route path ="*" component= { <NotFound /> } />
                            </Switch>
                            <NotificationContainer />
                        </AppLayout>
                    </ModalProvider>
                </Router>
            </Provider>
        );
    }
}

export default CoinApp;