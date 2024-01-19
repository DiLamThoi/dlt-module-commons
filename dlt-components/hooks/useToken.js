import { theme } from 'antd';

const useToken = () => {
    const { token, hashId } = theme.useToken();
    return token;
};

export default useToken;
