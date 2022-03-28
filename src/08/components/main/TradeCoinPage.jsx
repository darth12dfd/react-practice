//10-5. 코인 거래 알림 효과 추가하며 마무리하기

/*
    코인 거래 기능에 오류 메시지 뿐 아니라 코인 거래 처리 과정을 알려주는 메시지를 알림창에 표시한ㄷ. 
*/

///10-5-1. 코인 거래 처리 과정 메시지 알림창에 표시하기

////10-5-1-2. 액션 함수로 호출하기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../doit-ui/Text';
import Spacing from '../../../doit-ui/Spacing';
import Input from '../../../doit-ui/Input';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';
import Form from '../../../doit-ui/Form';
import { Consumer as Modal } from '../../../doit-ui/Modal/context';

class TradeCoinPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values, closeModal) {
    const { name, code, createTransaction } = this.props;
    const formValues = {
      ...values,
      code,
      name,
    };
    
    createTransaction(formValues,closeModal);
  }
  render() {
    const { name, price, type, loading } = this.props;
    const typeName = type === 'sell' ? '판매' : '구매';
    return (
      <Modal>
        {({ closeModal }) => (
          <Form
            onSubmit={values => this.handleSubmit(values, closeModal)}
            initValues={{ currentPrice: price }}
          >
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    {name} {typeName}
                  </Text>
                  <Spacing bottom={2}>
                    <Input
                      name="currentPrice"
                      label="금액"
                      value={values['currentPrice']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input
                      name="amount"
                      label="수량"
                      value={values['amount']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button primary disabled={loading}>
                      {loading ? '거래 처리중' : typeName}
                    </Button>
                    <Button onPress={closeModal} disabled={loading}>
                      취소
                    </Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </Modal>
    );
  }
}

TradeCoinPage.propTypes = {
  createTransaction: PropTypes.func,
};

export default TradeCoinPage;

/*
    코드를 보면 createTransaction() 액션 함수의 두 번째 인자로 closeModal을 전달한다. closeModal 콜백 함수가 10-5-1-1에서 작성된 createTransaction() 함수의 두 번째 인자로 전달되는 것이다.

    그러면 거래 요청이 완료된 후 closeModal() 콜백 함수가 호출되면서 모달이 자동으로 닫히게 된다.
*/