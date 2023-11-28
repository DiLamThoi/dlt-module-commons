import React from 'react';
import PropTypes from 'prop-types';

const EmployerNameView = (props) => {
    const { name, style } = props;

    return (
        <span style={style}>
            {name}
        </span>
    );
};

EmployerNameView.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
};

EmployerNameView.defaultProps = {};

export default EmployerNameView;
