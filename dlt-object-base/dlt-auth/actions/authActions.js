import { createAction } from '@reduxjs/toolkit';

export const AUTH_ACTION = {
    LOGIN: 'authAction.login',
    REGISTER: 'authAction.register',
};

export const authApiActions = {
    login: (data, role, handleAfterFetch) => {
        const action = createAction(AUTH_ACTION.LOGIN);
        return action({ data, role, handleAfterFetch });
    },
    register: (role, data, handleAfterFetch) => {
        const action = createAction(AUTH_ACTION.REGISTER);
        return action({ role, data, handleAfterFetch });
    },
};

const authActions = {
    authApiActions,
};
export default authActions;
