//06-3. 컨텍스트 API 활용하기

/*
    6-1 부터 6-2를 통해 공부한 '공급자와 소비자를 컴포넌트로 구현하여 컨텍스트를 구성하는 과정'은 리액트 16.3 버전의 컨텍스트 API에 편입되었다.

    이제부터는 이를 활용하여 공급자와 소비자를 만들어 본다.
*/

//6-3-1. createContext() 함수로 공급자와 소비자 만들기

/*
    리액트에서 제공하는 creatContext() 함수를 사용하면 컨텍스트를 생성할 수 있다. createContext() 함수는 공급자와 소비자를 반환한다. createContext()의 기본 사용 방법은 아래와 같다.

    const MyContext = React.createContext(defaultValue);
    //MyContext.Provider, MyContext.Consumer로 접근하여 사용
    //또는 const { Provider, Consumer } =( React.createContext(defaultValue):와 같이 분할 할당하여 사용

    createContext()는 리액트 최상위 함수이므로 React.createContext()와 같이 사용한다.

    공급자는 Provider, 소비자는 Consumer 라는 이름으로 접근할 수 있다. 앞에서는 공급자, 소비자를 구현할 때 contextTypes, childContextTypes 속성을 일일이 정의했지만 컨텍스트 API는 이런 속성을 알아서 관리해주므로 따로 정의하지 않아도 된다.
*/

//6-3-2. 컨텍스트 API로 공급자와 소비자 만들기

/*
    컨텍스트 API를 이용하여 로딩 상태를 표시하는 공급자 컴포넌트를 작성한다.

    컨텍스트 API를 통해 생성된 공급자와 소비자는 각각 독립된 저장 공가늘 가지면서 짝을 이뤄 데이터를 공유한다.
*/

//6-3-2-1. createContext() 함수로 공급자 만들기

/*
    다음은 createContext() 함수에 빈 객체를 기본값으로 전달하여 공급자와 소비자를 만든 것이다.

    createContext() 함수에 전달한 인자가 객체이므로 공급자의 컨텍스트 데이터도 객체일 것이다. 공급자의 컨텍스트 데이터는 value 프로퍼티로 하위 컴포넌트(소비자)에게 전달할 것이다.
*/
import React from 'react';

const { Provider, Consumer } = React.createContext({});//craeteContext() 함수에 빈 객체를 인자로 전달하여 공급자와 소비자를 생성한다.

export { Consumer };//소비자를 익스포트한다. 이후 이 소비자가 공급자의 컨테스트 데이터를 구독하게 될 것이다.

export default class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }

  render() {
    const context = {
      ...this.state,//컨텍스트 데이터에 state값과 함께 콜백 함수 setLoading()을 추가한다.
      setLoading: this.setLoading,
    };

    return <Provider value={context}>{this.props.children}</Provider>;//공급자가 공유할 컨텍스트 데이터를 value 프로퍼티에 전달한다. 그리고 자식프로퍼티를 출력하여 자식 컴포넌트에 컨텍스트 데이터를 전달한다.
  }
}

/*
    여기서 setLoading() 함수에 주목한다.

    setLoading() 함수는 key, value를 인자로 받아 key에 해당하는 state값을 저장한다.

    예를 들어 소비자에서 setLoading('loading1',true)을 호출하면 state난 { loading: true } 가 된다. 이후 render() 함수가 호출되면서 컨텍스트 데이터는 { loading1: true, setLoading: this.setLoading }가 될 것이다.
*/