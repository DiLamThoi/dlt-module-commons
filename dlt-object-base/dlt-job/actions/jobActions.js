import { createAction } from '@reduxjs/toolkit';

export const JOB_ACTION = {
    FETCH_JOB: 'jobAction.fetchJob',
};

const jobAction = {
    fetchJob: (userId) => {
        const action = createAction(JOB_ACTION.FETCH_JOB);
        return action({ userId });
    },
};

export default jobAction;
