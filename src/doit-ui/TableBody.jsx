//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-5. 데이터 테이블 컴포넌트 만들기

///08-2-5-3. TableBody 컴포넌트 만들기

/*
    TableBody 컴포넌트도 TableHead 컴포넌트와 유사한 방법을 자식 프로퍼티를 사용합니다. baseline 프로퍼티를 이용하여 잣기 배열 중 마지막을 제외한 행은 밑줄을 표시하도록 한다.
*/

/*
    마지막 줄을 생략하는 이유는 미관상 테두리 줄이 겹치지 않도록 하기 위함이다. 행의 밑줄을 생략하지 않으면 행의 밑줄과 테이블의 밑줄이 겹치므로 2줄로 출력된다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableBody extends PureComponent {
  render() {
    const { children } = this.props;
    const { length } = React.Children.toArray(children);

    return (
      <tbody>
        {React.Children.map(children, (child, index) => {
          const baseline = index < length - 1 ? true : false;
          return React.cloneElement(child, { baseline });
        })}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;