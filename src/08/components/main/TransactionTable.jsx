//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-3. 하단 정보 화면 구성하기

/*
    하단 정보 화면은 TransactionList 컴포넌트, TransactionSearchFilter 컴포넌트, TransactionTable 컴포넌트로 구성한다. 여기서도 공용 컴포넌트를 활용한다.
*/

///08-3-3-2. TransactionTable 컴포넌트 만들기

/*
    TransactionTable은 데이터 테이블 컴포넌트를 사용한다. transactions 프로퍼티에는 배열형 값이 들어있으므로 map() 함수를 이용하여 출력한다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '../../../doit-ui/Table';
import TableRow from '../../../doit-ui/TableRow';
import TableCell from '../../../doit-ui/TableCell';
import TableHead from '../../../doit-ui/TableHead';
import TableBody from '../../../doit-ui/TableBody';

import Text from '../../../doit-ui/Text';
import Spacing from '../../../doit-ui/Spacing';
import withLoading from '../../../05/withLoading';

const LoadingMessage = (
  <Spacing vertical={4} horizontal={2}>
    <Text large>데이터를 불러들이고 있습니다.</Text>
  </Spacing>
);

class TransactionTable extends PureComponent {
  render() {
    const { transactions } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">코인</TableCell>
            <TableCell align="center">코인 코드</TableCell>
            <TableCell align="center">시가 총액</TableCell>
            <TableCell align="center">현재 시세</TableCell>
            <TableCell align="right">거래 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(({ id, name, code, totalPrice, currentPrice, datetime }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell align="center">{code}</TableCell>
              <TableCell align="center">{totalPrice}</TableCell>
              <TableCell align="center">{currentPrice}</TableCell>
              <TableCell align="right">{datetime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      code: PropTypes.string,
      totalPrice: PropTypes.number,
      currentPrice: PropTypes.number,
      datatime: PropTypes.string,
    }),
  ),
};

export default withLoading(LoadingMessage)(TransactionTable);
