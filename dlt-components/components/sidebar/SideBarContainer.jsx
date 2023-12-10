import React, { useCallback } from 'react';
import SideBarView from './SideBarView';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const SideBarContainer = (props) => {
    const signOut = useSignOut();
    const navigate = useNavigate();

    const onLogout = useCallback(() => {
        signOut();
        navigate('/login');
    }, [navigate, signOut]);

    return (
        <SideBarView {...props} logout={onLogout} />
    );
};

export default SideBarContainer;
