import { all, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { DLT_DOMAIN } from '@dlt-object-base/dlt-config/apiConfig';
import { AUTH_ACTION } from '../actions/authActions';

/** Handle Saga action */
function* doLoginSaga(action) {
    const { data, role, handleAfterFetch } = action.payload;
    const response = yield call(axios.post, `${DLT_DOMAIN}/login`, { data, role });
    if (response.status === 200) {
        if (typeof handleAfterFetch.onSuccess === 'function') {
            yield call(handleAfterFetch.onSuccess, response);
        }
    } else {
        if (typeof handleAfterFetch.onError === 'function') {
            yield call(handleAfterFetch.onError, response);
        }
    }
}

function* doRegisterSaga(action) {
    const { data, role, handleAfterFetch } = action.payload;
    const response = yield call(axios.post, `${DLT_DOMAIN}/register`, { data, role });
    if (response.status === 200) {
        if (typeof handleAfterFetch.onSuccess === 'function') {
            yield call(handleAfterFetch.onSuccess, response);
        }
    } else {
        if (typeof handleAfterFetch.onError === 'function') {
            yield call(handleAfterFetch.onError, response);
        }
    }
}

/** Listen Saga action */
function* watchLoginSaga() {
    yield takeLatest(AUTH_ACTION.LOGIN, doLoginSaga);
}

function* watchRegisterSaga() {
    yield takeLatest(AUTH_ACTION.REGISTER, doRegisterSaga);
}

/** Export Sagas */
const listSagas = [
    watchLoginSaga,
    watchRegisterSaga,
];

const authSagas = function* authSagas() {
    yield all(listSagas.map((saga) => saga()));
};

export default authSagas;
