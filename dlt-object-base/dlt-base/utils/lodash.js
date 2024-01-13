import _ from 'lodash';

export const getIn = (object, ...path) => _.get(object, path);
export const getInWithDeault = (object, defaultValue, ...path) => _.get(object, path, defaultValue);

// export const clearDeep = (object) => _.merge({}, object);
export const clearDeep = (object) => _.transform(object, (result, value, key) => {
    if (_.isObject(value)) {
        result[key] = clearDeep(value); // Đệ quy cho các đối tượng con
    } else if (!_.isUndefined(value) && !_.isNull(value)) {
        result[key] = value;
    }
});

const lodash = {
    getIn,
    clearDeep,
    getInWithDeault,
};

export default lodash;
