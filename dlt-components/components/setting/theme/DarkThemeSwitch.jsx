import React from 'react';
import { Switch } from 'antd';
import { useDarkTheme } from '@dlt-components/hooks';

const ThemeSwitch = () => {
    const { isDark, toggleDark } = useDarkTheme();

    return <Switch value={isDark} onChange={toggleDark} />;
};

export default ThemeSwitch;
