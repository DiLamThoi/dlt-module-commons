import { combineReducers } from 'redux';
import StoreConfig from '@dlt-object-base/storeConfig';

/** Module reducers */
import jobSlice from '@dlt-module-job/slice/jobSlice';
import hasJobSlice from '@dlt-object-base/dlt-job/slice/hasJobSlice';
import employerSlice from '@dlt-module-employer/slice/employerSlice';
import hasEmployerSlice from '@dlt-module-employer/slice/hasEmployerSlice';

const rootReducer = combineReducers({
    [StoreConfig.job]: jobSlice.reducer,
    [StoreConfig.hasJob]: hasJobSlice.reducer,
    [StoreConfig.employer]: employerSlice.reducer,
    [StoreConfig.hasEmployer]: hasEmployerSlice.reducer,
});

export default rootReducer;
