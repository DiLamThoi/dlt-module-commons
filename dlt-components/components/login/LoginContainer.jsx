import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import LoginView from './LoginView';

const LoginContainer = () => {
    const signIn = useSignIn();

    const onLogin = async (userName, password) => {
        const data = { userName, password };
        axios.post('http://server.truongnbn.com:8080/auth', data).then((res) => {
            signIn({
                token: res.data.token,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { userName: data.userName, email: data.email }
            });
        }).catch((err) => {});
    };

    return (
        <LoginView onLogin={onLogin} />
    );
};

export default LoginContainer;
