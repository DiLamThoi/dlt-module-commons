import { getIn } from '@dlt-module-base/utils/lodash';

const getAll = (state) => state;
const get = (state, id) => getIn(state, id);
const getList = (state, ids) => ids.map((id) => getIn(state, id));
const getField = (state, id, ...field) => getIn(state, id, 'data', ...field);
const getInfo = (state, id, info) => getIn(state, id, info);

const objectSelector = {
    getAll,
    get,
    getList,
    getField,
    getInfo,
};

export default objectSelector;
