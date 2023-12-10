import { createSlice as createReduxSlice } from '@reduxjs/toolkit';
import initialObjectState from '../object/initialObjectState';
import initialEdgeState from '../edge/initialEdgeState';
import objectReducers from '../object/objectReducer';
import edgeReducers from '../edge/edgeReducer';

const createSlice = (name, initialState, baseReducers, reducers, extraReducers) => 
    createReduxSlice({
        name,
        initialState,
        reducers: { ...baseReducers, ...reducers },
        extraReducers,
    });

const createObjectSlice = (name, reducers = {}, extraReducers) =>
    createSlice(name, initialObjectState, objectReducers, reducers, extraReducers);

const createEdgeSlice = (name, reducers = {}, extraReducers) =>
    createSlice(name, initialEdgeState, edgeReducers, reducers, extraReducers);

export {
    createObjectSlice,
    createEdgeSlice,
};

export default createSlice;
