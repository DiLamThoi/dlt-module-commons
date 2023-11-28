import React from 'react';
import PropTypes from 'prop-types';
import EmployerLogoView from './EmployerLogoView';
import { LOGO_DEFAULT } from '../constants/employerConstants';
import { useSelector } from 'react-redux';
import employerSelector from '@dlt-object-base/dlt-employer/selector/employerSelector';

const EmployerLogoContainer = (props) => {
    const { employerId, ...other } = props;

    const employerLogo = useSelector((state) => employerSelector.getField(state, employerId, 'logo'));

    return <EmployerLogoView logoUrl={employerLogo || LOGO_DEFAULT} {...other} />;
};


EmployerLogoContainer.propTypes = {
    employerId: PropTypes.string,
};

export default EmployerLogoContainer;
