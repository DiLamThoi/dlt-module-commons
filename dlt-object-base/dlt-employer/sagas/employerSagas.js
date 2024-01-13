import axios from 'axios';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { EMPLOYER_ACTION, employerUiAction, hasEmployerUiAction } from '../actions/employerActions';
import StoreConfig from '@dlt-object-base/storeConfig';
import { DLT_DOMAIN } from '@dlt-object-base/dlt-config/apiConfig';

/** Handle Saga action */
function* doGetAnEmployerSaga(action) {
    const { id } = action.payload;
    try {
        const response = yield call(axios.get, `${DLT_DOMAIN}/employer/${id}`);
        const employers = response.data[StoreConfig.employer];
        const employerIds = Object.keys(employers);
        for (const employerId of employerIds) {
            yield put(employerUiAction.add({ data: employers[employerId] }));
        }
    } catch (error) {
        // console.log(error);
    }
}

function* doFetchEmployerSaga(action) {
    try {
        const response = yield call(axios.get, `${DLT_DOMAIN}/employer`);
        const employers = response.data[StoreConfig.employer];
        const employerIds = Object.keys(employers);
        yield put(hasEmployerUiAction.addList({ parentId: '-1', ids: employerIds }));
        for (const employerId of employerIds) {
            yield put(employerUiAction.add({ data: employers[employerId] }));
        }
    } catch (error) {
        // console.log(error);
    }
}

/** Listen Saga action */
function* watchFetchAnEmployerSaga() {
    yield takeEvery(EMPLOYER_ACTION.FETCH_AN_EMPLOYER, doGetAnEmployerSaga);
}

function* watchFetchEmployerSaga() {
    yield takeLatest(EMPLOYER_ACTION.FETCH_EMPLOYER, doFetchEmployerSaga);
}

/** Export Sagas */
const listSagas = [
    watchFetchEmployerSaga,
    watchFetchAnEmployerSaga,
];

const employerSagas = function* employerSagas() {
    yield all(listSagas.map((saga) => saga()));
};

export default employerSagas;
