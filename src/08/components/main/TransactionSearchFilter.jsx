//08. 가상 코인 거래소 만들기

//08-3. 프로젝트 구성하기

//08-3-3. 하단 정보 화면 구성하기

/*
    하단 정보 화면은 TransactionList 컴포넌트, TransactionSearchFilter 컴포넌트, TransactionTable 컴포넌트로 구성한다. 여기서도 공용 컴포넌트를 활용한다.
*/

///08-3-3-1. TransactionSearchFilter 컴포넌트 만들기

/*
    Input 컴포넌트를 사용하여 TransactionSearchFilter 컴포넌트를 만든다. Input 컴포넌트는 InlineList 컴포넌트를 사용하여 가로로 배치한다. 

    FormProvider 컴포넌트로 사용자의 입력을 받고, 입력된 값으 onSubmit 콜백 함수의 인자로 전달될 것이다. 여기서는 onSubmit 콜백 함수에 전송된 값을 확인하기 위해 conosle.log() 함수를 사용한다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InlineList from '../../../doit-ui/InlineList';
import Button from '../../../doit-ui/Button';
import Text from '../../../doit-ui/Text';
import Input from '../../../doit-ui/Input';
import Form from '../../../doit-ui/Form';

import Select, { Option } from '../../../doit-ui/Select';

import { withRouter } from 'react-router-dom';

//import Api from '../../Api';
//import { propTypes } from '../../../doit-ui/Spacing';

class TransactionSearchFilter extends PureComponent {
  ///09-4-2-3. 리덕스 스토어 데이터 변경하기

  /*
        Form 컴포넌트에서 onSubmit 이벤트가 발생하면 this.handleSubmit() 함수가 호출되고 이어서 setTransactionList() 액션 함수가 호출될 것이다.
    */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(params) {
    /*
        const { setTransactionList } = this.props;
        Api.get('./transactions', { params }).then(({ data }) => setTransactionList(data));
        */
    const { history } = this.props;
    const cleanedParmas = Object.entries(params)
      .filter((entries) => entries[1] !== '')
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    /*
        requestTransactionList(cleanedParmas);
        setFilter(cleanedParmas);
        */
    const queryString = Object.entries(cleanedParmas)
      .map(([key, value]) => `${key}=${value}`) //['code=DOIT', 'price=100']
      .join('&'); //'code=DOIT&price=100'
    history.push(`/?${queryString}`);
  }

  render() {
    const { initValues } = this.props;
    return (
      //09-4-1. 검색요청 기능 완성하기
      <Form onSubmit={this.handleSubmit} initValues={initValues}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select name="code" label="코인 코드" onChange={onChange} value={values['code']}>
                <Option label="선택해주세요" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="두잇코인(DOIT)" value="DOIT" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="최소 거래가"
                onChange={onChange}
                value={values['currentPrice_gte']}
              />
              <Input
                name="currentPrice_lte"
                label="최대 거래가"
                onChange={onChange}
                value={values['currentPrice_lte']}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

//TransactionSearchFilter.propTypes = { setFilter: PropTypes.func };

//TransactionSearchFilter.propTypes = { setTransactionList: PropTypes.func };
TransactionSearchFilter.propTypes = { requestTransactionList: PropTypes.func };

//export default TransactionSearchFilter;

export default withRouter(TransactionSearchFilter);
