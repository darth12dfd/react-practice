//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-5. 데이터 테이블 컴포넌트 만들기

///08-2-5-4. TableRow 컴포넌트 만들기

/*
    TableRow 컴포넌트는 TableHead, TableBody 컴포넌트에서 전달받은 isHeader, baseline 프로퍼티를 자식 컴포넌트에 그대로 전달한다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableRow extends PureComponent {
  render() {
    const { children, isHeader, baseline } = this.props;

    return (
      <tr>
        {React.Children.map(children, child =>
          React.cloneElement(child, { baseline, isHeader })
        )}
      </tr>
    );
  }
}

TableRow.propTypes = {
  children: PropTypes.node,
  baseline: PropTypes.bool,
  isHeader: PropTypes.bool
};

export default TableRow;