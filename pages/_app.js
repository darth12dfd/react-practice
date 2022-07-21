//13-3. 서버사이드 랜더링 도입하기

//13-3-4. next.js에서 출력할 App 컴포넌트 만들기

import React from 'react';
import App, { Container } from 'next/app';
import configureStore from '../src/08/store/configureStore';
import { Provider } from 'react-redux';
import ModalProvider from '../src/08/ModalProvider';
import AppLayout from '../src/08/components/AppLayout';
import NotificationContainer from '../src/08/containers/NotificationContainer';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RouterStateContainer from '../src/08/containers/RouterStateContainer';

const isServer = typeof window === 'undefined';

class MyApp extends App {
    store = configureStore();

    render(){
        const { Component, router, pageProps } = this.props;
        const Router = isServer ? StaticRouter : BrowserRouter;//next.js에는 브라우저 객체가 없으므로 StaticRouter를 사용하여 화면을 출력해야 한다. 서버 출력 이후 자바스크립트가 동작하면 BrowserRouter로 화면을 출력하도록 구성한다.
        const routerProps = isServer ? { location : router.asPath } : {};

        return(
            <Container>
                <Provider store={this.store}>
                    <Router {...routerProps}>
                        <RouterStateContainer />
                        <ModalProvider>
                            <AppLayout>
                                <Component {...pageProps} />
                                <NotificationContainer />
                            </AppLayout>
                        </ModalProvider>
                        <NotificationContainer />
                    </Router>
                </Provider>
            </Container>
        );
    }
}

export default MyApp;