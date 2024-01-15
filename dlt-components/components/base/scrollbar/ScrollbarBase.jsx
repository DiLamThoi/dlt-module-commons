import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const ScrollbarBase = (props) => {
    const { style, children } = props;

    return (
        <PerfectScrollbar>
            <div style={style}>
                {children}
            </div>
        </PerfectScrollbar>
    );
};

ScrollbarBase.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
};
ScrollbarBase.defaultProps = {};

export default ScrollbarBase;
