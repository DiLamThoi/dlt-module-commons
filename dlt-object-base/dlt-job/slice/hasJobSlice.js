import { createSlice } from '@reduxjs/toolkit';
import initialEdgeState from '@dlt-object-base/dlt-base/edge/initialEdgeState';
import StoreConfig from '@dlt-object-base/storeConfig';

const hasJobSlice = createSlice({
    name: StoreConfig.hasJob,
    initialState: initialEdgeState,
    reducers: {},
});

export const {
    createJob,
} = hasJobSlice.actions;

const hasJobReducer = hasJobSlice.reducer;

export default hasJobReducer;
