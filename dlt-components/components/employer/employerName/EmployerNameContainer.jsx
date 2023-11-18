import React from 'react';
import PropTypes from 'prop-types';
import EmployerNameView from './EmployerNameView';

const EmployerNameContainer = (props) => {
    const { employerId, ...other } = props;

    return <EmployerNameView {...other} />;
};


EmployerNameContainer.propTypes = {
    employerId: PropTypes.string,
};

export default EmployerNameContainer;
