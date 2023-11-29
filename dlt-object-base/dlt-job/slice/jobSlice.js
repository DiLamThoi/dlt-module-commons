import { createSlice } from '@reduxjs/toolkit';
import initialObjectState from '@dlt-object-base/dlt-base/object/initialObjectState';
import objectReducers from '@dlt-object-base/dlt-base/object/objectReducer';
import StoreConfig from '@dlt-object-base/storeConfig';

const jobSlice = createSlice({
    name: StoreConfig.job,
    initialState: initialObjectState,
    reducers: {
        ...objectReducers,
        createJob: (state, action) => {
            const { id, data } = action.payload;
            if (!state[id]) {
                state[id] = { data };
            }
            return state;
        },
    },
});

export default jobSlice;
