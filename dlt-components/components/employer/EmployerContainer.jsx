import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import EmployerView from './EmployerView';
import employerSelector from '@dlt-object-base/dlt-employer/selector/employerSelector';

const EmployerContainer = (props) => {
    const { employerId } = props;

    const employerData = useSelector((state) => employerSelector.getInfo(state, employerId, 'data'));

    return employerData && (
        <EmployerView data={employerData}/>
    );
};

EmployerContainer.propTypes = {
    employerId: PropTypes.string,
};

export default EmployerContainer;
