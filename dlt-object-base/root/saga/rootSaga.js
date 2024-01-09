import { all } from 'redux-saga/effects';

/** Module sagas */
import authSagas from '@dlt-object-base/dlt-auth/sagas/authSagas';
import jobSagas from '@dlt-module-job/sagas/jobSagas';
import employerSagas from '@dlt-module-employer/sagas/employerSagas';

const listRootSagas = [
    authSagas,
    jobSagas,
    employerSagas,
    // Add other Sagas here
];

const rootSaga = function* rootSaga() {
    yield all(listRootSagas.map((saga) => saga()));
};

export default rootSaga;
