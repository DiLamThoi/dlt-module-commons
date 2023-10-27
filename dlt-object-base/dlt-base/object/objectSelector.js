import { createSelector } from 'reselect';

const get = (state, id) =>  state[id];

const objectSelector = {
    get,
};

export default objectSelector;
