import { combineReducers } from 'redux';

/** Module reducers */
import patternReducer from '../../dlt-pattern/slice/patternSlice';
import jobReducer from '../../dlt-job/slice/jobSlice';

const rootReducer = combineReducers({
  pattern: patternReducer,
  job: jobReducer
});

export default rootReducer;
