import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'antd';

const HeaderView = (props) => {
    const { token } = theme.useToken();
    return <div>HeaderView</div>;
};

HeaderView.propTypes = {};

HeaderView.defaultProps = {};

export default HeaderView;
