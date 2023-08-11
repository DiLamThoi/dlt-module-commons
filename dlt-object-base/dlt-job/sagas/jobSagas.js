import { all, put, takeEvery } from "redux-saga/effects";
import { JOB_ACTION } from "../actions/jobActions";
import { getJob } from "../slice/jobSlice";


/** Handle Saga action */
function* doGetJobSaga(payload) {
    console.log(payload);
    yield put(getJob);
}


/** Listen Saga action */
function* watchGetJobSaga() {
    yield takeEvery(JOB_ACTION.GET_JOB, doGetJobSaga)
}

/** Export Sagas */
const listSagas = [
    watchGetJobSaga,
];

const jobSagas = function* jobSagas() {
    yield all(listSagas.map((saga) => saga()))
}

export default jobSagas;