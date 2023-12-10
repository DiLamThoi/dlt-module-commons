import _ from 'lodash';

export const getIn = (object, ...path) => _.get(object, path);
export const getInWithDeault = (object, defaultValue, ...path) => _.get(object, path, defaultValue);

export const clearDeep = (object) => _.merge({}, object);

const lodash = {
    getIn,
    clearDeep,
    getInWithDeault,
};

export default lodash;
