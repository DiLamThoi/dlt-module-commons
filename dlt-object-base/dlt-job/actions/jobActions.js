import { createAction } from '@reduxjs/toolkit';
import jobSlice from '../slice/jobSlice';
import hasJobSlice from '../slice/hasJobSlice';

export const JOB_ACTION = {
    CREATE_JOB: 'jobAction.createJob',
    DELETE_JOB: 'jobAction.deleteJob',
    FETCH_JOB: 'jobAction.fetchJob',
};

export const jobUiAction = jobSlice.actions;
export const hasJobUiAction = hasJobSlice.actions;

export const jobApiAction = {
    deleteJob: (id) => {
        const action = createAction(JOB_ACTION.DELETE_JOB);
        return action({ id });
    },
    createJob: (data) => {
        const action = createAction(JOB_ACTION.CREATE_JOB);
        return action({ data });
    },
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
