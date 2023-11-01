import React, { useCallback } from 'react';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import LoginView from './LoginView';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const onLogin = useCallback(async (userName, password) => {
        const data = { userName, password };
        axios.post('http://server.truongnbn.com:8080/auth', data).then((res) => {
            signIn({
                token: res.data.token,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { userName: data.userName, email: data.email },
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
