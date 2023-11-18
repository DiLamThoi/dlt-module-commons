import React from 'react';
import PropTypes from 'prop-types';

const EmployerAddressView = (props) => {
    const { address, style } = props;

    return (
        <text style={style}>
            {address}
        </text>
    );
};

EmployerAddressView.propTypes = {
    address: PropTypes.string,
    style: PropTypes.object,
};

EmployerAddressView.defaultProps = {
    address: 'Hà Nội',
};

export default EmployerAddressView;
