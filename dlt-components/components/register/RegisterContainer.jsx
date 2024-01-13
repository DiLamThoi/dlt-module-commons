import React, { useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import RegisterView from './RegisterView';
import Cookies from 'js-cookie';
import { DLT_DOMAIN } from '@dlt-object-base/dlt-config/apiConfig';
import { ACCOUNT_ROLE } from '@dlt-components/constants/authConstants';

const RegisterContainer = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const navigateLogin = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    const onRegister = useCallback((role, data) => {
        axios.post(`${DLT_DOMAIN}/register`, { role, data }).then((res) => {
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
            navigateLogin();
        }).catch((err) => {});
    }, [navigateLogin, signIn]);

    const onRegisterUser = useCallback(({ firstName, lastName, email, userName, password }) => {
        const data = { firstName, lastName, email, userName, password };
        data.fullName = `${data.firstName} ${data.lastName}`;
        onRegister(ACCOUNT_ROLE.USER, data);
    }, [onRegister]);

    const onRegisterEmployer = useCallback(({ name, address, email, userName, password }) => {
        const data = { name, address, email, userName, password };
        onRegister(ACCOUNT_ROLE.EMPLOYER, data);
    }, [onRegister]);

    return (
        <RegisterView onRegisterUser={onRegisterUser} onRegisterEmployer={onRegisterEmployer} navigateLogin={navigateLogin}/>
    );
};

export default RegisterContainer;
