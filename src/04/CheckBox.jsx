//04-5 CheckBox 컴포넌트 만들면서 복습하기

//1. CheckBox 컴포넌트 만들기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    //콜백 함수 안에 this 변수를 참조하므로 bind() 함수를 사용하여 this의 범위가 CheckBox 컴포넌트의 객체로 정의하도록 한다.
    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      //autoFocus값이 true 일 경우 출력 후 input에 자동으로 커서를 배치한다.
      this.ref.focus();
    }
  }

  handleClick(e) {
    const { name, onChange } = this.props;
    onChange(name, e.target.checked); //onChange 함수를 호출할 때 첫 번째 인자는 name 프로퍼티를 전달하고, 두 번째 인자는 e.target.checked 값을 전달한다.
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, children, styles, checked } = this.props;

    return (
      <label>
        {label}
        <div>
          <input
            ref={this.setRef}
            type="checkbox" //input의 타입은 checkbox 이다.
            checked={checked && 'checked'} //checked의 프로퍼티가 true일 경우 checked 값을 선언한다.
            onChange={this.handleClick} //input 엘리먼트를 클릭할 경우 onChange 함수를 호출한다.
          />
          {children}
        </div>
        {errorMessage && (
          <div>
            <span {...css(styles.errorText)}>{errorMessage}</span>
          </div>
        )}
      </label>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(CheckBox);
