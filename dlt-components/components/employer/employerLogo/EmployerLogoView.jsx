import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';

const EmployerLogoView = (props) => {
    const { logoUrl, width, height, preview } = props;

    return <Image src={logoUrl} width={width} height={height} preview={preview} />;
};

EmployerLogoView.propTypes = {
    logoUrl: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    preview: PropTypes.bool,
};

EmployerLogoView.defaultProps = {
    preview: false,
};

export default EmployerLogoView;
