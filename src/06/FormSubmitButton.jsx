//6-5. 입력 폼 만들며 컨텍스트 복습하기

///6-5-4. 전송 버튼을 위한 컴포넌트 만들기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './FormContext';
import Button from '../04/Button';

class FormSubmitButton extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Consumer>
        {({ submit }) => (
          <Button primary onPress={submit}>
            {children}
          </Button>
        )}
      </Consumer>
    );
  }
}

FormSubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormSubmitButton;