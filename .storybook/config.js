//04-1 비주얼 테스트로 더 쉽게 개발하기

//스토리북 config.js에 스토리 연결하기
/*
import { configure } from '@storybook/react';

function loadStories(){
    require('../src/stories/InputStory');//InputStory.jsx 파일을 loadStories() 함수 안에서 require() 함수로 임포트 한다. 즉, Input 스토리를 스토리북에 연결한다.
    //스토리 파일을 이곳에 추가할 수 있다.
    require('../src/stories/NewCounterStory');
}

configure(loadStories,module);
*/

//스토리가 자동으로 스토리북에 추가되도록 config.js 설정하기
import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

//import '../src/sass/materialize.scss';
import '../src/doit-ui/app.css';

function loadStories(){
    const context = require.context('../src/stories',true,/Story\.jsx$/);//require.context() 함수로 src/stories 폴더의 스토리 목록을 가져온다.

    context.keys().forEach((srcFile) =>{
        interopRequireDefault(context(srcFile));//이 함수로 받아낸 context 함수는 require() 함수와 동일한 기능을 하며, 가변 경로를 사용한다. interopRequireDefault(context(srcFile))는 context() 함수로 임포트한 파일 중 default 항목을 임포트한다.
    });
}

setAddon(JSXAddon);
configure(loadStories,module);