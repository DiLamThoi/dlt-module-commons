import { all, put, takeEvery } from "redux-saga/effects";
import { JOB_ACTION } from "../actions/jobActions";
import { createJob } from "../slice/jobSlice";


/** Handle Saga action */
function* doCreateJobSaga(action) {
    const { payload } = action;
    // TruongNBN: thực hiện thay đổi store, sau khi tạo server sẽ làm chuẩn luồng fetch
    yield put(createJob(payload));
}


/** Listen Saga action */
function* watchcreateJobSaga() {
    yield takeEvery(JOB_ACTION.CREATE_JOB, doCreateJobSaga)
}

/** Export Sagas */
const listSagas = [
    watchcreateJobSaga,
];

const jobSagas = function* jobSagas() {
    yield all(listSagas.map((saga) => saga()))
}

export default jobSagas;