import { all } from 'redux-saga/effects';

/** Module sagas */
import jobSagas from '@dlt-module-job/sagas/jobSagas';

const listRootSagas = [
    jobSagas,
    // Add other Sagas here
];

const rootSaga = function* rootSaga() {
    yield all(listRootSagas.map((saga) => saga()));
};

export default rootSaga;
