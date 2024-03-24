import React from 'react';
import { Switch, Tooltip } from 'antd';
import { useDarkTheme, useToken } from '@dlt-components/hooks';
import { PartlySunny, Moon } from 'react-ionicons';

const DarkThemeButton = () => {
    const token = useToken();
    const { isDark, toggleDark } = useDarkTheme();

    return (
        <Tooltip title={`Chế độ tối: ${isDark ? 'Bật' : 'Tắt'}`}>
            <Switch
                value={isDark}
                onChange={toggleDark}
                checkedChildren={<Moon color={token.yellow} width="10px" height="10px" />}
                unCheckedChildren={<PartlySunny color={token.yellow} width="10px" height="10px" />}
            />
        </Tooltip>
    );
};

export default DarkThemeButton;
