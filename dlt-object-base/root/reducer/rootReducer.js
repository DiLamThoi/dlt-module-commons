import { combineReducers } from 'redux';
import StoreConfig from '@dlt-object-base/storeConfig';

/** Module reducers */
import jobReducer from '@dlt-module-job/slice/jobSlice';

const rootReducer = combineReducers({
    [StoreConfig.job]: jobReducer
    // [StoreConfig.job]: jobReducer
});

export default rootReducer;
