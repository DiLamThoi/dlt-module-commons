import React from 'react';
import PropTypes from 'prop-types';

const WrapperScreen = ({ children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 8, height: '100vh', overflowY: 'auto' }}>
        {children}
    </div>
);

WrapperScreen.propTypes = {
    children: PropTypes.element,
};
WrapperScreen.defaultProps = {};

export default WrapperScreen;
