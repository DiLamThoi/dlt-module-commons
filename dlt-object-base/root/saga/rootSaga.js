import { all } from 'redux-saga/effects';
/** Module sagas */
import patternSagas from '../../dlt-pattern/sagas/patternSagas';
import jobSagas from '../../dlt-job/sagas/jobSagas';

const listRootSagas = [
  patternSagas,
  jobSagas,
  // Add other Sagas here
]

const rootSaga =  function* rootSaga() {
  yield all(listRootSagas.map((saga) => saga()));
}

export default rootSaga;
