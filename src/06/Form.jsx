//6-5. 입력 폼 만들며 컨텍스트 복습하기

///6-5-2. 폼 공급자 만들기

/*
    폼 공급자는 유효성 검사 홤수를 프로퍼티로 전달받는다. 유효성 검사 함수는 자식의 입력값이 변경될 때마다 유효성 검사를 해준다.
    만약 입력값이 올바르지 않다면 오류 메시지를 소비자를 통해 전달하여 오류 메시지를 출력한다.
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './FormContext';

class FormProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(name, updatedValue) {
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue,
        },
      }),
      () => this.validate(this.state.values),
    );
  }

  reset() {
    this.setState({ values: {}, errors: {} });
  }

  submit() {
    this.props.onSubmit(this.state.values);
  }

  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values);
    this.setState({
      errors,
    });
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          errors,
          values,
          onChange: this.onChange,
          reset: this.reset,
          submit: this.submit,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

FormProvider.defaultProps = {
  validate: () => ({}),
};

export default FormProvider;