import React from 'react';
import { Switch } from 'antd';
import { useEffectMode } from '@dlt-components/hooks';
import { HappyProvider } from '@ant-design/happy-work-theme';

const EffectThemeSwitch = () => {
    const { isEffect, toggleEffect } = useEffectMode();

    return (
        <HappyProvider>
            <Switch value={isEffect} onChange={toggleEffect} />
        </HappyProvider>
    );
};

export default EffectThemeSwitch;
