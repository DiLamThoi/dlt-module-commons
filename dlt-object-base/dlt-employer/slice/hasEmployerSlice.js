import { createSlice } from '@reduxjs/toolkit';
import initialEdgeState from '@dlt-object-base/dlt-base/edge/initialEdgeState';
import StoreConfig from '@dlt-object-base/storeConfig';
import edgeReducers from '@dlt-object-base/dlt-base/edge/edgeReducer';

const hasEmployerSlice = createSlice({
    name: StoreConfig.hasEmployer,
    initialState: initialEdgeState,
    reducers: {
        ...edgeReducers,
    },
});

export default hasEmployerSlice;
