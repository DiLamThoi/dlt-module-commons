import { getIn } from '../utils/lodash';

const getAll = (state) => state;
const get = (state, id) => getIn(state, id);
const getField = (state, id, ...field) => getIn(state, id, 'data', ...field);
const getInfo = (state, id, info) => getIn(state, id, info);

const objectSelector = {
    getAll,
    get,
    getField,
    getInfo,
};

export default objectSelector;
