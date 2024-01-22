import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SettingView from './SettingView';
import SettingCollapseView from './SettingCollapseView';

const SettingContainer = (props) => {
    const { collapsed } = props;

    const SettingViewComponent = useMemo(
        () => collapsed ? SettingCollapseView : SettingView,
        [collapsed],
    );
    return (
        <SettingViewComponent {...props} />
    );
};

SettingContainer.propTypes = {
    collapsed: PropTypes.bool,
};

SettingContainer.defaultProps = {
    collapsed: false,
};

export default SettingContainer;
