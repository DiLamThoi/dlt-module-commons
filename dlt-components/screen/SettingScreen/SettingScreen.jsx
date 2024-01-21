import React from 'react';
import { useToken } from '@dlt-components/hooks';
import WrapperScreen from '../WrapperScreen';
import SettingContainer from '@dlt-components/components/setting/SettingContainer';

const SettingScreen = () => {
    const token = useToken();

    return (
        <WrapperScreen>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: 60,
                    color: token.colorTextBase,
                    fontWeight: token.fontWeightStrong,
                    fontSize: token.fontSizeHeading3,
                    padding: token.paddingSM,
                }}
            >
                Cài đặt
            </div>
            <SettingContainer />
        </WrapperScreen>
    );
};

export default SettingScreen;
