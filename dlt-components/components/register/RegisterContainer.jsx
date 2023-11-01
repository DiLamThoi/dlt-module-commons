import React, { useCallback } from 'react';
import RegisterView from './RegisterView';
import { useNavigate } from 'react-router-dom';

const RegisterContainer = () => {
    const navigate = useNavigate();

    const onRegister = useCallback(() => {}, []);

    const navigateLogin = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    return (
        <RegisterView onRegister={onRegister} navigateLogin={navigateLogin}/>
    );
};

export default RegisterContainer;
