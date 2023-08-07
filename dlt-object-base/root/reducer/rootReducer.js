import { combineReducers } from 'redux';

/** Module reducers */
import patternReducer from '../../dlt-pattern/slice/patternSlice';

const rootReducer = combineReducers({
  pattern: patternReducer,
});

export default rootReducer;
