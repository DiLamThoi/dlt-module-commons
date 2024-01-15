import React from 'react';
import PropTypes from 'prop-types';
import ScrollbarBase from '@dlt-components/components/base/scrollbar/ScrollBarBase';

const WrapperScreen = ({ children }) => (
    <ScrollbarBase style={{ display: 'flex', flexDirection: 'column', padding: 8, height: '100vh' }}>
        {children}
    </ScrollbarBase>
);

WrapperScreen.propTypes = {
    children: PropTypes.node,
};
WrapperScreen.defaultProps = {};

export default WrapperScreen;
