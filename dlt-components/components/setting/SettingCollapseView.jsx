import React from 'react';
import PropTypes from 'prop-types';
import { useToken } from '@dlt-components/hooks';
import DarkThemeSwitch from './theme/DarkThemeSwitch';
import EffectThemeSwitch from './effect/EffectThemeSwitch';
import CompactThemeSwitch from './compact/CompactThemeSwitch';
import DarkThemeButton from './theme/DarkThemeButton';

const SettingCollapseView = (props) => {
    const { style } = props;
    const token = useToken();

    return (
        <div style={style}>
            {/* <DarkThemeSwitch />
            <EffectThemeSwitch />
            <CompactThemeSwitch /> */}
            <DarkThemeButton />
        </div>
    );
};

SettingCollapseView.propTypes = {
    style: PropTypes.object,
};

SettingCollapseView.defaultProps = {};

export default SettingCollapseView;
