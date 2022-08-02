//11-2. 대용량 데이터 효율적으로 처리하기

///11-2-2. 가상 코인 거래소에 페이지 이동 기능 추가하기

////11-2-2-1.  페이지 이동 버튼 컴포넌트 추가하기

/*
    다음은 페이지 이동 버튼을 출력하는 TransactionPagination 컴포넌트이다. [이전]과 [다음]버튼을 추가하여 각 버튼이 클릭될 때 현재 requestTransactionList 액션 함수에 해당 페이지 번호를 전달하도록 구현한다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';

class TransactionPagination extends PureComponent {
  constructor(props) {
    super(props);
    this.handleNextPress = this.handleNextPress.bind(this);
    this.handlePrevPress = this.handlePrevPress.bind(this);
  }

  handleNextPress() {
    const { requestTransactionList, pageNumber, searchParams } = this.props;
    requestTransactionList(searchParams, pageNumber + 1); //pageNumber 이전 번호의 페이지 목록을 요청한다.
  }

  handlePrevPress() {
    const { requestTransactionList, pageNumber, searchParams } = this.props;
    requestTransactionList(searchParams, pageNumber - 1); //pageNumber 다음 번호의 페이지 목록을 요청한다.
  }

  render() {
    const { loading, pageNumber, hasNext } = this.props;
    const prevDisabled = loading || pageNumber <= 1; //로딩 상태이거나 첫 페이지인 경우 이전 버튼의 작동을 정지한다.
    const nextDisabled = loading || !hasNext; //로딩 상태이거나 마지막 페이지인 경우 다음 버튼의 작동을 정지한다.

    return (
      <InlineList align="right">
        <Button secondary disabled={prevDisabled} onPress={this.handlePrevPress}>
          이전
        </Button>
        <Button primary disabled={nextDisabled} onPress={this.handleNextPress}>
          다음
        </Button>
      </InlineList>
    );
  }
}

TransactionPagination.propTypes = {
  hasNext: PropTypes.bool,
  pageNumber: PropTypes.number,
  loading: PropTypes.bool,
  reqeustTransactionList: PropTypes.func.isRequired,
};

export default TransactionPagination;
