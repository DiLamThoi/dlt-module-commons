import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import EmployerAddressView from './EmployerAddressView';
import employerSelector from '@dlt-object-base/dlt-employer/selector/employerSelector';

const EmployerAddressContainer = (props) => {
    const { employerId, ...other } = props;

    const employerAddress = useSelector((state) => employerSelector.getField(state, employerId, 'address'));

    return <EmployerAddressView address={employerAddress} {...other} />;
};

EmployerAddressContainer.propTypes = {
    employerId: PropTypes.string,
};

export default EmployerAddressContainer;
