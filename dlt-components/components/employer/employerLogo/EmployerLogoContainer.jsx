import React from 'react';
import PropTypes from 'prop-types';
import { LOGO_DEFAULT } from '../constants/employerConstants';
import EmployerLogoView from './EmployerLogoView';

const EmployerLogoContainer = (props) => {
    const { employerId, ...other } = props;

    // TruongNBN: Tạm thời để logo default, bổ sung selector ở đây sau
    const logoUrl = LOGO_DEFAULT;

    return <EmployerLogoView logoUrl={logoUrl} {...other} />;
};


EmployerLogoContainer.propTypes = {
    employerId: PropTypes.string,
};

export default EmployerLogoContainer;
