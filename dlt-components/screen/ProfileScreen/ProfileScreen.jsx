import React from 'react';
import WrapperScreen from '../WrapperScreen';
import { useAccount, useToken } from '@dlt-components/hooks';
import EmployerContainer from '@dlt-components/components/employer/EmployerContainer';
import UserProfileContainer from '@dlt-components/components/user/UserProfileContainer';

const ProfileScreen = () => {
    const { meId, isEmployer } = useAccount();
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
                }}
            >
                <span style={{ flex: 1 }}>
                    {isEmployer ? 'Hồ sơ nhà tuyển dụng' : 'Hồ sơ người tìm việc'}
                </span>
            </div>
            {isEmployer ? (
                <EmployerContainer employerId={meId} />
            ) : <UserProfileContainer userId={meId} />}
        </WrapperScreen>
    );
};

export default ProfileScreen;
