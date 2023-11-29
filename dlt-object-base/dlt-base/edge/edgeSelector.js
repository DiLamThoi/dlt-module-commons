import { getIn, getInWithDeault } from '../utils/lodash';

const getSelf = (state) => state;
const getItems = (state, parentId) => getInWithDeault(state, [], parentId, 'items');
const getItemIds = (state, parentId) => getInWithDeault(state, [], parentId, 'itemIds');
const getItem = (state, parentId, id) => getIn(state, parentId, 'items', id);
const getItemField = (state, parentId, id, field) => getIn(state, parentId, 'items', id, 'data', field);

const getMinScore = (state, parentId) => getIn(state, parentId, 'minScore');
const getMaxScore = (state, parentId) => getIn(state, parentId, 'maxScore');
const getTotal = (state, parentId) => getIn(state, parentId, 'total');
const getIndex = (state, parentId) => getIn(state, parentId, 'index');
const getSearchParams = (state, parentId) => getIn(state, parentId, 'searchParams');
const getInfo = (state, parentId, info) => getIn(state, parentId, info);

const edgeSelector = {
    getSelf,
    getItems,
    getItemIds,
    getItem,
    getItemField,
    getMinScore,
    getMaxScore,
    getTotal,
    getIndex,
    getSearchParams,
    getInfo,
};

export default edgeSelector;
