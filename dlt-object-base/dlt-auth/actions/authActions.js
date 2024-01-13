import { createAction } from '@reduxjs/toolkit';

export const AUTH_ACTION = {
    LOGIN: 'authAction.login',
};

export const authApiActions = {
    login: (userName, password, role, handleAfterFetch) => {
        const action = createAction(AUTH_ACTION.LOGIN);
        return action({ userName, password, role, handleAfterFetch });
    },
};

const authActions = {
    authApiActions,
};
export default authActions;
