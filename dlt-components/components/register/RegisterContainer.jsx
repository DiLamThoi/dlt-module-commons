import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import RegisterView from './RegisterView';
import { ACCOUNT_ROLE } from '@dlt-components/constants/authConstants';
import { useDispatch } from 'react-redux';
import { authApiActions } from '@dlt-object-base/dlt-auth/actions/authActions';

const RegisterContainer = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateLogin = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    const onRegister = useCallback((role, data) => {
        dispatch(authApiActions.register(role, data, {
            onSuccess: (res) => {
                const { token, meId } = res.data;
                signIn({
                    token,
                    expiresIn: 3600,
                    tokenType: 'Bearer',
                    authState: { meId, role },
                });
                navigateLogin();
            },
            onError: (err) => {},
        }));
    }, [dispatch, navigateLogin, signIn]);

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
