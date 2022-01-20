//06-3. 컨텍스트 API 활용하기

//6-3-2. 컨텍스트 API로 공급자와 소비자 만들기

//6-3-2-2. 한 개의 공급자를 구독하는 세 개의 소비자 만들기

/*
  다음은 6-3-2-1 과정에서 익스포트한 Consumer를 받아 세 개의 소비자를 만드는 것이다. React.Fragment 컴포넌틀르 사용해 세 개의 소비자를 감싸 출력했다.

  컨텍스트 API의 Consumer 컴포넌트는 6-2의 render() 프로퍼티를 사용하여 구현한 소비자와 유사하짐나 프로퍼티의 이름으로 render가 아니라 children을 사용한다. 즉, 컨텍스트 API의 Consumer 컴포넌트는 아래와 같이 구현되어 있다.

  function Consumer({ children }, context ){
    return children(context);
  };
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import { Consumer } from './LoadingProviderWithNewContext';

function ButtonWithNewConsumer({ children }) {
    return (
        <React.Fragment>
            <Consumer
                children={ value => (
                    <Button onPress = {() => value.setLoading('loading',!value.loading)}>
                        { value.loading? '로딩 중': children }
                    </Button>
                )}
            />

            <Consumer
                children={ ({loading2 = false, setLoading }) => (
                    <Button onPress = {() => setLoading('loading2',!loading2)}>
                        { loading2 ? '로딩 중': children }
                    </Button>
                )}
            />

            <Consumer
                children={ ({ loading = false, loading2 = false }) => (
                    <Button>
                        { loading && loading2 ? '로딩 중': children}
                    </Button>
                )}
            />

        </React.Fragment>
    )
}

/*
    각 소비자에 대해 설명한다.

    첫 번째 소비자는 공급자의 value 프로퍼티에 전달된 값을 인자로 받아 Button 컴포넌트를 출력한다. 
    loading은 최초 정의되지 않았으므로 value.loading은 undefined이며, value.setLoading은 공급자의 setLoading() 함수를 의미한다.

    두 번째 소비자는 객체 분할 할당식으로 컨텍스트 데이터 loading2, setLoading을 인자로 받아 Button 컴포넌트를 출력한다.
    인자의 기본값을 false로 정의했으므로 이 값이 loading2에 할당된다.
    
    세 번째 소비자는 컨텍스트 데이터의 loading, loading2을 동시에 구독한 다음 Button 컴포넌트에 메시지를 출력한다.

    그런데 자식 프로퍼티의 특징은 엘리먼트 사이에 배치하여 전달할 수 있다는 것이다.

    실제로는 위의 코드는 아래와 같이 children이라는 프로퍼티 없이 구현해야 제대로 Consumer를 사용한 것이라고 볼 수 있다.

    return(
        <Consumer>
        { (contextValue) => (
            <Button>{contextValue.loading ? '로딩 중' : children}</Button>
        )}
        </Consumer>
    );
*/