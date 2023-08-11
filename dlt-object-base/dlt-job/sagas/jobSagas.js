import { all, put, takeEvery } from "redux-saga/effects";
import { JOB_ACTION } from "../actions/jobActions";
import { addJob } from "../slice/jobSlice";


/** Handle Saga action */
function* docreateJobSaga(action) {
    const { payload } = action;
    // TruongNBN: thực hiện thay đổi store, sau khi tạo server sẽ làm chuẩn luồng fetch
    yield put(addJob(payload));
}


/** Listen Saga action */
function* watchcreateJobSaga() {
    yield takeEvery(JOB_ACTION.CREATE_JOB, docreateJobSaga)
}

/** Export Sagas */
const listSagas = [
    watchcreateJobSaga,
];

const jobSagas = function* jobSagas() {
    yield all(listSagas.map((saga) => saga()))
}

export default jobSagas;