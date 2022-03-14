//08-2. 가상 코인 거래소의 공용 컴포넌트 만들기

///08-2-5. 데이터 테이블 컴포넌트 만들기

///08-2-5-1. Table 컴포넌트 만들기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';

class Table extends PureComponent {
    render(){
        const { styles, children } = this.props;
        return(
            <table {...css(styles.table)}>
                {children}
            </table>
        );
    }
}

Table.propTypes = {
    ...withStylesPropTypes,
    children: PropTypes.node.isRequired,
};

export default withStyles(({ color, unit }) => ({
    table: {
        borderCollapse: 'collapse',
        width: '100%',
    },
}))(Table);
