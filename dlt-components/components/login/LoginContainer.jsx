import React, { useCallback } from 'react';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import LoginView from './LoginView';
import { ROLE_LOGIN } from './constants/loginConstants';
import Cookies from 'js-cookie';
import { DLT_DOMAIN } from '@dlt-object-base/dlt-config/apiConfig';

const LoginContainer = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const onLogin = useCallback(async (userName, password, role = ROLE_LOGIN.USER) => {
        const data = { userName, password, role };
        axios.post(`${DLT_DOMAIN}/login`, { data }).then((res) => {
            const { token, meId } = res.data; 
            // Lưu thông tin vào cookie
            Cookies.set('meId', meId);
            Cookies.set('role', role);
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
