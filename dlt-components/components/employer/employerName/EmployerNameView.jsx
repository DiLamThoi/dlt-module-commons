import React from 'react';
import PropTypes from 'prop-types';

const EmployerNameView = (props) => {
    const { name, style } = props;

    return (
        <text style={style}>
            {name}
        </text>
    );
};

EmployerNameView.propTypes = {
    name: PropTypes.string,
    style: PropTypes.object,
};

EmployerNameView.defaultProps = {
    name: 'Tập đoàn Đại học Bách Khoa Hà Nội',
};

export default EmployerNameView;
