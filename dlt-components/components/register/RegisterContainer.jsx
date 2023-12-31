import React, { useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import RegisterView from './RegisterView';
import { ROLE_REGISTER } from './constants/registerConstants';

const RegisterContainer = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const navigateLogin = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    const onRegister = useCallback((role, data) => {
        axios.post('http://server.truongnbn.com:8080/register', { role, data }).then((res) => {
            const { token, meId } = res.data;
            signIn({
                token: res.data.token,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { userName: data.userName, email: data.email },
            });
            navigateLogin();
        }).catch((err) => {});
    }, [navigateLogin, signIn]);

    const onRegisterUser = useCallback(({ firstName, lastName, email, userName, password }) => {
        const data = { firstName, lastName, email, userName, password };
        data.fullName = `${data.firstName} ${data.lastName}`;
        onRegister(ROLE_REGISTER.USER, data);
    }, [onRegister]);

    const onRegisterEmployer = useCallback(({ name, address, email, userName, password }) => {
        const data = { name, address, email, userName, password };
        onRegister(ROLE_REGISTER.EMPLOYER, data);
    }, [onRegister]);

    return (
        <RegisterView onRegisterUser={onRegisterUser} onRegisterEmployer={onRegisterEmployer} navigateLogin={navigateLogin}/>
    );
};

export default RegisterContainer;
