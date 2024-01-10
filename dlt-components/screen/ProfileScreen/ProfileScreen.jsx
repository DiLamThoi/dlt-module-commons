import React from 'react';
import { useDispatch } from 'react-redux';
import WrapperScreen from '../WrapperScreen';
import useAccount from '@dlt-components/hooks/useAccount';
import EmployerContainer from '@dlt-components/components/employer/EmployerContainer';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const { meId, isEmployer } = useAccount();
    return (
        <WrapperScreen>
            {isEmployer ? (
                <EmployerContainer employerId={meId}/>
            ) : 123}
        </WrapperScreen>
    );
};

export default ProfileScreen;
