import React, { useCallback, useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import LoginView from './LoginView';
import { ACCOUNT_ROLE } from '@dlt-components/constants/authConstants';
import { useDispatch } from 'react-redux';
import { authApiActions } from '@dlt-object-base/dlt-auth/actions/authActions';

const LoginContainer = () => {
    const dispatch = useDispatch();

    const [loginState, setLoginState] = useState({ loading: false, error: null });

    const signIn = useSignIn();
    const navigate = useNavigate();

    const navigateRegister = useCallback(() => {
        navigate('/register');
    }, [navigate]);

    const onLogin = useCallback((userName, password, role = ACCOUNT_ROLE.USER) => {
        setLoginState({ loading: true, error: null });
        const data = { userName, password };
        dispatch(authApiActions.login(data, role, {
            onSuccess: (res) => {
                setLoginState({ loading: false, error: null });
                const { token, meId } = res.data;
                signIn({
                    token,
                    expiresIn: 3600,
                    tokenType: 'Bearer',
                    authState: { meId, role },
                });
            },
            onError: (err) => {
                setLoginState({ loading: false, error: err });
            },
        }));
    }, [dispatch, signIn]);
    
    return (
        <LoginView onLogin={onLogin} loginState={loginState} navigateRegister={navigateRegister} />
    );
};

export default LoginContainer;
