import { createSelector } from 'reselect';

const get = (state, id) => state.items[id];
const getItemIds = (state) => state.itemIds;

const objectSelector = {
    get,
    getItemIds,
};

export default objectSelector;
