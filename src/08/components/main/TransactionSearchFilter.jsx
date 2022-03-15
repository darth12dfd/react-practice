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

import InlineList from '../../../doit-ui/InlineList';
import Button from '../../../doit-ui/Button';
import Text from '../../../doit-ui/Text';
import Input from '../../../doit-ui/Input';
import Form from '../../../doit-ui/Form';

import Select, { Option } from '../../../doit-ui/Select';

class TransactionSearchFilter extends PureComponent {
    render(){
        return (
            <Form onSubmit = {values => console.log(values)}>
                <Form.Consumer>
                    {({ onChange, values }) => (
                        <InlineList spacingBetween={2} verticalAlign = "bottom">
                            <Text xlarge bold>
                                검색
                            </Text>
                            <Select
                                name="code"
                                labe="코인 코드"
                                onChange={onChange}
                                value={values['code']}
                                >
                                <Option label = "선택해주세요" />
                                <Option label = "비트코인(BTX)" value = "BTX" />
                                <Option label = "이더리움(ETH)" value = "ETF" />
                                <Option label = "두잇코인(DOIT)" value = "DOIT" />
                            </Select>
                            <Input
                                name="minAmount"
                                label="최소 거래가"
                                onChange={onChange}
                                value={values['minAmount']}
                                />
                            <Input
                                name="maxAmount"
                                label="최대 거래가"
                                onChange={onChange}
                                value={values['maxAmount']}
                                />
                            <Button type="submit" primary >
                                검색
                            </Button>
                        </InlineList>
                    )}
                </Form.Consumer>
            </Form>
        );
    }
}

TransactionSearchFilter.propTypes = {};

export default TransactionSearchFilter;