import _ from 'lodash';

export const getIn = (object, ...path) => _.get(object, path);
export const getInWithDeault = (object, defaultValue, ...path) => _.get(object, path, defaultValue);

const lodash = {
    getIn,
    getInWithDeault,
};

export default lodash;
