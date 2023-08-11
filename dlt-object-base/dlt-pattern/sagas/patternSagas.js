import { all, put, takeEvery } from 'redux-saga/effects';
import { getValue, setValue } from '../slice/patternSlice';

/** Handle Saga action */
function* doSetValuePatternSaga() {
    yield put(getValue());
}

function* doGetValuePatternSaga() {
    yield put(setValue());
}

/** Listen Saga action */
function* watchGetValuePatternSaga() {
  yield takeEvery('PATTERN_GET_VALUE', doGetValuePatternSaga);
}

function* watchSetValuePatternSaga() {
    yield takeEvery('PATTERN_SET_VALUE', doSetValuePatternSaga);
}

/** Export Sagas */
const listSagas = [
    watchGetValuePatternSaga,
    watchSetValuePatternSaga,
];

const patternSagas = function* patternSagas() {
    yield all(listSagas.map((saga) => saga()))
}

export default patternSagas;
