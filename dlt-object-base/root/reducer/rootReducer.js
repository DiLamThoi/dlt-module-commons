import { combineReducers } from 'redux';
import StoreConfig from '@dlt-object-base/storeConfig';

/** Module reducers */
import jobReducer from '@dlt-module-job/slice/jobSlice';
import employerReducer from '@dlt-module-employer/slice/employerSlice';

const rootReducer = combineReducers({
    [StoreConfig.job]: jobReducer,
    // [StoreConfig.job]: jobReducer
    [StoreConfig.employer]: employerReducer,
});

export default rootReducer;
