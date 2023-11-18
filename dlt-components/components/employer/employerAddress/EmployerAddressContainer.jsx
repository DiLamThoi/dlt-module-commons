import React from 'react';
import PropTypes from 'prop-types';
import EmployerAddressView from './EmployerAddressView';

const EmployerAddressContainer = (props) => {
    const { employerId, ...other } = props;

    return <EmployerAddressView {...other} />;
};


EmployerAddressContainer.propTypes = {
    employerId: PropTypes.string,
};

export default EmployerAddressContainer;
