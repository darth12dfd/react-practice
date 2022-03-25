//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-1. 앱 전체 화면 구성하기

///08-3-1-3. CoinApp 컴포넌트 만들기

///09-5-1-3. 가상 코인 거래소에 모달 공급자 추가하기

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';
//import CoinOverview from './components/main/CoinOverview';
//import TransactionList from './components/main/TransactionList';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/main/NotificationContainer';
import CoinOverview from './components/main/CoinOverview';
import TransactionListContainer from './containers/main/TransactionListContainer';

class CoinApp extends PureComponent {
    store = configureStore();
    
    render(){
        return (
            <Provider store={this.store}>
                <ModalProvider>
                    <AppLayout>
                        <CoinOverview />
                        <TransactionListContainer />
                        <NotificationContainer />
                    </AppLayout>
                </ModalProvider>
            </Provider>
        );
    }
}

export default CoinApp;