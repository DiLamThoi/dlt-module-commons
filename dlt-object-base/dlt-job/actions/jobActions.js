import { createAction } from '@reduxjs/toolkit';
import jobSlice from '../slice/jobSlice';
import hasJobSlice from '../slice/hasJobSlice';

export const JOB_ACTION = {
    FETCH_JOB: 'jobAction.fetchJob',
};

export const jobUiAction = jobSlice.actions;
export const hasJobUiAction = hasJobSlice.actions;

export const jobApiAction = {
    fetchJob: (userId) => {
        const action = createAction(JOB_ACTION.FETCH_JOB);
        return action({ userId });
    },
};

const jobAction = {
    objectAction: jobUiAction,
    edgeAction: hasJobUiAction,
    apiAction: jobApiAction,
};
export default jobAction;
