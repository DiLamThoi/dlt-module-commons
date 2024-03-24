import { all, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { DLT_DOMAIN } from '@dlt-object-base/dlt-config/apiConfig';
import { AUTH_ACTION } from '../actions/authActions';

/** Handle Saga action */
function* doLoginSaga(action) {
    const { userName, password, role, handleAfterFetch } = action.payload;
    const response = yield call(axios.post, `${DLT_DOMAIN}/login`, { data: { userName, password, role } });
    if (response.status === 200) {
        handleAfterFetch.onSuccess(response);
    } else {
        handleAfterFetch.onError(response);
    }
}

/** Listen Saga action */
function* watchLoginSaga() {
    yield takeLatest(AUTH_ACTION.LOGIN, doLoginSaga);
}

/** Export Sagas */
const listSagas = [
    watchLoginSaga,
];

const authSagas = function* authSagas() {
    yield all(listSagas.map((saga) => saga()));
};

export default authSagas;
