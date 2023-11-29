import { createAction } from '@reduxjs/toolkit';
import employerSlice from '../slice/employerSlice';
import hasEmployerSlice from '../slice/hasEmployerSlice';

export const EMPLOYER_ACTION = {
    FETCH_EMPLOYER: 'employerAction.fetchEmployer',
};

export const employerUiAction = employerSlice.actions;

export const hasEmployerUiAction = hasEmployerSlice.actions;

export const employerApiAction = {
    fetchEmployer: (userId) => {
        const action = createAction(EMPLOYER_ACTION.FETCH_EMPLOYER);
        return action({ userId });
    },
};

const employerAction = {
    edgeAction: hasEmployerUiAction,
    objectAction: employerUiAction,
    apiAction: employerApiAction,
};
export default employerAction;
