import { createSelector } from 'reselect';

const get = (state, id) => state.items[id];
const getField = (state, id, field) => state.items[id] && state.items[id][field];
const getItemIds = (state) => state.itemIds;

const objectSelector = {
    get,
    getField,
    getItemIds,
};

export default objectSelector;
