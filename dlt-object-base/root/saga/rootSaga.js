import { all } from 'redux-saga/effects';
/** Module sagas */
import patternSagas from '../../dlt-pattern/sagas/patternSagas';

const listRootSagas = [
  patternSagas,
  // Add other Sagas here
]

const rootSaga =  function* rootSaga() {
  yield all(listRootSagas.map((saga) => saga()));
}

export default rootSaga;
