//11-5. 회원 가입 기능 추가하며 마무리하기

///11-5-5. RegisterPage 컴포넌트 생성하기

/*
    회원 강비 화면을 구성하는 컴포넌트를 생성한다. 가입 화면은 모달창을 사용하여 출력할 예정이며, 코드는 TradeCoinPage 컴포넌트와 유사한 구조이므로 해당 코드를 참조하여 작성한다.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../doit-ui/Text';
import Spacing from '../../../doit-ui/Spacing';
import Input from '../../../doit-ui/Input';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';
import Form from '../../../doit-ui/Form';
import { Consumer as Modal } from '../../../doit-ui/Modal/context';

class RegisterPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values, closeModal) {
    const { name, createUser } = this.props;
    const formValues = {
      ...values,
      name,
    };
    createUser(formValues, closeModal);
  }
  render() {
    const { loading } = this.props;
    return (
      <Modal>
        {({ closeModal }) => (
          <Form onSubmit={values => this.handleSubmit(values, closeModal)}>
            <Form.Consumer>
              {({ onChange }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    회원 등록
                  </Text>
                  <Spacing bottom={2}>
                    <Input name="userId" label="사용자 아이디" onChange={onChange} />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input name="totalAmount" type="number" label="자산 총액" onChange={onChange} />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button type="submit" primary disabled={loading}>
                      회원 등록
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

RegisterPage.propTypes = {
  createUser: PropTypes.func,
};

export default RegisterPage;
