import { createAction } from '@reduxjs/toolkit';

export const EMPLOYER_ACTION = {
    FETCH_EMPLOYER: 'employerAction.fetchEmployer',
};

const employerAction = {
    fetchEmployer: (userId) => {
        const action = createAction(EMPLOYER_ACTION.FETCH_EMPLOYER);
        return action({ userId });
    },
};

export default employerAction;
