import StoreConfig from '@dlt-object-base/storeConfig';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { JOB_ACTION, hasJobUiAction, jobUiAction } from '../actions/jobActions';
import axios from 'axios';

/** Handle Saga action */
function* doFetchJobSaga(action) {
    const { userId } = action.payload;
    try {
        const response = yield call(axios.get, 'http://server.truongnbn.com:8080/job');
        const jobs = response.data[StoreConfig.job];
        const jobIds = Object.keys(jobs);
        for (const jobId of jobIds) {
            yield put(jobUiAction.add({ id: jobId, data: jobs[jobId] }));
        }
        const hasJobs = response.data[StoreConfig.hasJob];
        const hasJobIds = Object.keys(hasJobs);
        for (const hasJobId of hasJobIds) {
            yield put(hasJobUiAction.addList({ parentId: hasJobId, ids: hasJobs[hasJobId] }));
        }
    } catch (error) {
        // console.log(error);
    }
}

/** Listen Saga action */
function* watchFetchJobSaga() {
    yield takeLatest(JOB_ACTION.FETCH_JOB, doFetchJobSaga);
}

/** Export Sagas */
const listSagas = [
    watchFetchJobSaga,
];

const jobSagas = function* jobSagas() {
    yield all(listSagas.map((saga) => saga()));
};

export default jobSagas;
