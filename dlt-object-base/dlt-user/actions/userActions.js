import { createAction } from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';
import hasUserSlice from '../slice/hasUserSlice';

export const USER_ACTION = {
    FETCH_AN_USER: 'userAction.FetchAnUser',
};

export const userUiAction = userSlice.actions;

export const hasUserUiAction = hasUserSlice.actions;

export const userApiAction = {
    fetchAnUser: (id) => {
        const action = createAction(USER_ACTION.FETCH_AN_USER);
        return action({ id });
    },
};

const userAction = {
    edgeAction: hasUserUiAction,
    objectAction: userUiAction,
    apiAction: userApiAction,
};
export default userAction;
