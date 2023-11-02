import React, { useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import RegisterView from './RegisterView';

const RegisterContainer = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const navigateLogin = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    const onRegister = useCallback(({ firstName, lastName, email, userName, password }) => {
        const data = { firstName, lastName, email, userName, password };
        data.fullName = `${data.firstName} ${data.lastName}`;
        axios.post('http://server.truongnbn.com:8080/register', { data }).then((res) => {
            signIn({
                token: res.data.token,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { userName: data.userName, email: data.email },
            });
            navigateLogin();
        }).catch((err) => {});
    }, [navigateLogin, signIn]);

    return (
        <RegisterView onRegister={onRegister} navigateLogin={navigateLogin}/>
    );
};

export default RegisterContainer;
