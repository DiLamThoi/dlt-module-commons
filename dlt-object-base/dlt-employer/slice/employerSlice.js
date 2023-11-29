import { createSlice } from '@reduxjs/toolkit';
import initialObjectState from '@dlt-object-base/dlt-base/object/initialObjectState';
import objectReducers from '@dlt-object-base/dlt-base/object/objectReducer';
import StoreConfig from '@dlt-object-base/storeConfig';

const employerSlice = createSlice({
    name: StoreConfig.employer,
    initialState: initialObjectState,
    reducers: {
        ...objectReducers,
    },
});

export default employerSlice;
