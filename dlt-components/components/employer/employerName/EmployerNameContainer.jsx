import React from 'react';
import PropTypes from 'prop-types';
import EmployerNameView from './EmployerNameView';

import { useSelector } from 'react-redux';
import employerSelector from '@dlt-object-base/dlt-employer/selector/employerSelector';

const EmployerNameContainer = (props) => {
    const { employerId, ...other } = props;

    const employerName = useSelector((state) => employerSelector.getField(state, employerId, 'name'));

    return <EmployerNameView name={employerName} {...other} />;
};


EmployerNameContainer.propTypes = {
    employerId: PropTypes.string,
};

export default EmployerNameContainer;
