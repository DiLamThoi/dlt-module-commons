import React from 'react';
import { Switch } from 'antd';
import { useDarkTheme, useToken } from '@dlt-components/hooks';
import { Moon, PartlySunny } from 'react-ionicons';

const ThemeSwitch = () => {
    const token = useToken();
    const { isDark, toggleDark } = useDarkTheme();

    return (
        <Switch
            value={isDark}
            onChange={toggleDark}
            checkedChildren={<Moon color={token.yellow} width="10px" height="10px" />}
            unCheckedChildren={<PartlySunny color={token.yellow} width="10px" height="10px" />}
        />
    );
};

export default ThemeSwitch;
