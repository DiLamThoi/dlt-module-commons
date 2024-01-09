import React, { useCallback } from 'react';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import LoginView from './LoginView';
import { DLT_DOMAIN } from '@dlt-object-base/dlt-config/apiConfig';
import { ACCOUNT_ROLE } from '@dlt-components/constants/authConstants';

const LoginContainer = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const onLogin = useCallback(async (userName, password, role = ACCOUNT_ROLE.USER) => {
        const data = { userName, password, role };
        axios.post(`${DLT_DOMAIN}/login`, { data }).then((res) => {
            const { token, meId } = res.data; 
            signIn({
                token,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { meId, role },
            });
        }).catch((err) => {});
    }, [signIn]);

    const navigateRegister = useCallback(() => {
        navigate('/register');
    }, [navigate]);
    

    return (
        <LoginView onLogin={onLogin} navigateRegister={navigateRegister} />
    );
};

export default LoginContainer;
