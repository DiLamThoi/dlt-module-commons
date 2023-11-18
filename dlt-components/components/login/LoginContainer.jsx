import React, { useCallback } from 'react';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import LoginView from './LoginView';
import { ROLE_LOGIN } from './constants/loginConstants';

const LoginContainer = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const onLogin = useCallback(async (userName, password, role = ROLE_LOGIN.USER) => {
        const data = { userName, password, role };
        axios.post('http://server.truongnbn.com:8080/login', { data }).then((res) => {
            signIn({
                token: res.data.token,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { meId: res.data.meId },
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
