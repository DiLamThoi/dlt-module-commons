import { createAction } from '@reduxjs/toolkit';

export const JOB_ACTION = {
    CREATE_JOB: 'jobAction.createJob',
    FETCH_JOB: 'jobAction.fetchJob',
};

const jobAction = {
    createJob: (jobId, data) => {
        const action = createAction(JOB_ACTION.CREATE_JOB);
        return action({ id: jobId, data });
    },
    fetchJob: (userId) => {
        const action = createAction(JOB_ACTION.FETCH_JOB);
        return action({ userId });
    },
};

export default jobAction;
