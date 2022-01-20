//6-5. 입력 폼 만들며 컨텍스트 복습하기

///6-5-3. Input 컴포넌트와 소비자 연결하기

import React, { PureComponent } from 'react';

import Input from '../04/InputWithStyle';
import { Consumer } from './FormContext';

class FormConsumerExample extends PureComponent {
  render() {
    const { name, ...otherProps } = this.props;
    return (
      <Consumer>
        {({ values, errors, onChange }) => (
          <Input
            {...otherProps}
            name={name}
            onChange={onChange}
            value={values[name]}
            errorMessage={errors[name]}
          />
        )}
      </Consumer>
    );
  }
}

export default FormConsumerExample;