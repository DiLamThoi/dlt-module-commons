import React from 'react';
import { Switch } from 'antd';
import { useCompactTheme } from '@dlt-components/hooks';

const CompactThemeSwitch = () => {
    const { isCompact, toggleCompact } = useCompactTheme();

    return <Switch value={isCompact} onChange={toggleCompact} />;
};

export default CompactThemeSwitch;
