import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { JOB_ACTION } from '../actions/jobActions';
import { createJob } from '../slice/jobSlice';
import axios from 'axios';

/** Handle Saga action */
function* doFetchJobSaga(action) {
    const { userId } = action.payload;
    try {
        const response = yield call(axios.get, 'http://server.truongnbn.com:8080/job');
        const jobs = response.data;
        const jobIds = Object.keys(jobs);
        for (const jobId of jobIds) {
            yield put(createJob({ id: jobId, data: jobs[jobId] }));
        }
    } catch (error) {
        console.log(error);
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
