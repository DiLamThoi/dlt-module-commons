import axios from 'axios';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import StoreConfig from '@dlt-object-base/storeConfig';
import { DLT_DOMAIN } from '@dlt-object-base/dlt-config/apiConfig';
import { USER_ACTION, userUiAction } from '../actions/userActions';

/** Handle Saga action */
function* doGetAnUserSaga(action) {
    const { id } = action.payload;
    try {
        const response = yield call(axios.get, `${DLT_DOMAIN}/user/${id}`);
        const users = response.data[StoreConfig.user];
        const userIds = Object.keys(users);
        for (const userId of userIds) {
            yield put(userUiAction.add({ data: users[userId] }));
        }
    } catch (error) {
        // console.log(error);
    }
}

/** Listen Saga action */
function* watchFetchAnUserSaga() {
    yield takeEvery(USER_ACTION.FETCH_AN_USER, doGetAnUserSaga);
}

/** Export Sagas */
const listSagas = [
    watchFetchAnUserSaga,
];

const userSagas = function* userSagas() {
    yield all(listSagas.map((saga) => saga()));
};

export default userSagas;
