//1. App 컴포넌트를 사용하면서 화면 구성하기
//필수 리액트 구동 모듈들이다.
import React from 'react';
import ReactDOM from 'react-dom';
//초기 화면을 구성하는 사용자 코드이다.
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//리액트 엔진이 화면을 출력하는 코드이다.
//id가 root인 엘리먼트에 컴포넌트를 출력한다.
ReactDOM.render(<App />, document.getElementById('root'));

//아래 부분은 서비스워커 구동 코드로 오프라인 모드로 작동하는 데 도움이 되는 모듈이다.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//2. 만약 App 컴포넌트를 사용하지 않는다면 아래와 같이 수정한다.

/*
var img = document.createElement('img');
img.setAttribute('src','http://www.easyspub.co.kr/images/logo_footer.png');
var divEl = document.createElement('div');
divEl.innerText = '안녕하세요';
var welcomeEl = document.createElement('div');
welcomeEl.append(img);
welcomeEl.append(divEl);

var root = document.getElementById('root');
root.append(welcomeEl);
*/

//1번과 2번 모두 같은 화면을 만들지만 2번의 경우 코드가 더욱 복잡하다. 따라서 컴포넌트를 활용한 1번 방식으로 코드를 작성한다.