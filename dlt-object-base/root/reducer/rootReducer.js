import { combineReducers } from 'redux';

/** Module reducers */
import jobReducer from '../../dlt-job/slice/jobSlice';
import StoreConfig from '../../storeConfig';

const rootReducer = combineReducers({
    [StoreConfig.job]: jobReducer
    // [StoreConfig.job]: jobReducer
});

export default rootReducer;
