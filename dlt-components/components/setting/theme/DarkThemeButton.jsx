import React from 'react';
import { Switch, Tooltip } from 'antd';
import { useDarkTheme, useToken } from '@dlt-components/hooks';
import { PartlySunny, Moon } from 'react-ionicons';

const DarkThemeButton = () => {
    const token = useToken();
    const { isDark, toggleDark } = useDarkTheme();

    // return (
    //     <Button
    //         type="text"
    //         shape="circle"
    //         icon={<PartlySunny color={token.yellow} />}
    //         onClick={toggleDark}
    //     />
    // );

    return (
        <Tooltip title={`Chế độ tối: ${isDark ? 'Bật' : 'Tắt'}`}>
            <Switch
                value={isDark}
                onChange={toggleDark}
                checkedChildren={<Moon color={token.yellow} width={50} height={50} />}
                unCheckedChildren={<PartlySunny color={token.yellow} width={50} height={50} />}
            />
        </Tooltip>
    );
};

export default DarkThemeButton;
