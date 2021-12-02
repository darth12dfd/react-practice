//04-2 CSS로 컴포넌트 스타일 적용하기

//컴포넌트에 머터리얼 디자인 본격적으로 적용해보기

//1. 머터리얼 디자인이 적용된 입력 컴포넌트 만들기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  //클래스형 컴포넌트의 PureComponent 형태로 작성
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      //autoFocus 값이 true일 경우 출력 후 input 박스에서 자동으로 커서를 배치한다.
      this.ref.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.autoFocus) {
      //autoFocus 값이 true일 경우 출력 후 input 박스에서 자동으로 커서를 배치한다.
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, name, value, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && 'invalid'}`}
          ref={this.ref}
          type={type}
          onChange={this.handleChange}
          value={value}
        />
        <label className="active" for={`input_${name}`}>
          {label}
        </label>
        {errorMessage && (
          <span className="helper-text" data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']), //문자열형의 값 'text','number','price' 중하나의 값만 가질 수 있다.
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text', //type의 기본값은 text이다.
};

export default Input;
