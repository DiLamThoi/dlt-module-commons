import { ACCOUNT_ROLE } from '@dlt-components/constants/authConstants';
import { useAuthUser } from 'react-auth-kit';

const useAccount = () => {
    const AuthUser = useAuthUser();
    const { meId, role } = AuthUser();
    
    const isEmployer = role === ACCOUNT_ROLE.EMPLOYER;
    return { meId, role, isEmployer };
};

export default useAccount;
