import { useEffect } from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '@dlt-components/components/login/LoginContainer';

const LoginScreen = () => {
    const authenticated = useIsAuthenticated();
    const navigate= useNavigate();

    useEffect(() => {
        if (authenticated()) navigate('/');
    }, [authenticated, navigate]);

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoginContainer />
        </div>
    );
};

export default LoginScreen;
