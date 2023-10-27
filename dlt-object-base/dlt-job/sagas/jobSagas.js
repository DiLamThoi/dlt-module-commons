import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { JOB_ACTION } from '../actions/jobActions';
import { createJob } from '../slice/jobSlice';
import axios from 'axios';

/** Handle Saga action */
function* doCreateJobSaga(action) {
    const { payload } = action;
    // TruongNBN: thực hiện thay đổi store, sau khi tạo server sẽ làm chuẩn luồng fetch
    yield put(createJob(payload));
}

function* doFetchJobSaga(action) {
    const { userId } = action.payload;
    try {
        const response = yield call(axios.get, 'http://server.truongnbn.com:8080/jobs');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

/** Listen Saga action */
function* watchCreateJobSaga() {
    yield takeEvery(JOB_ACTION.CREATE_JOB, doCreateJobSaga);
}

function* watchFetchJobSaga() {
    yield takeLatest(JOB_ACTION.FETCH_JOB, doFetchJobSaga);
}

/** Export Sagas */
const listSagas = [
    watchCreateJobSaga,
    watchFetchJobSaga,
];

const jobSagas = function* jobSagas() {
    yield all(listSagas.map((saga) => saga()));
};

export default jobSagas;