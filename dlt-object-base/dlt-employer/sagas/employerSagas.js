import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { EMPLOYER_ACTION } from '../actions/employerActions';
import { createEmployer } from '../slice/employerSlice';

/** Handle Saga action */
function* doFetchEmployerSaga(action) {
    try {
        const response = yield call(axios.get, 'http://server.truongnbn.com:8080/employer');
        const employers = response.data;
        const employerIds = Object.keys(employers);
        for (const employerId of employerIds) {
            yield put(createEmployer({ id: employerId, data: employers[employerId] }));
        }
    } catch (error) {
        // console.log(error);
    }
}

/** Listen Saga action */
function* watchFetchEmployerSaga() {
    yield takeLatest(EMPLOYER_ACTION.FETCH_EMPLOYER, doFetchEmployerSaga);
}

/** Export Sagas */
const listSagas = [
    watchFetchEmployerSaga,
];

const employerSagas = function* employerSagas() {
    yield all(listSagas.map((saga) => saga()));
};

export default employerSagas;
