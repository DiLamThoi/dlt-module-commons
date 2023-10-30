import _ from 'lodash';

const createSelector = (baseSelector, statePath = []) => (
    Object.keys(baseSelector).reduce((finalDefault, key) => {
        const final = finalDefault;
        final[key] = (state, ...args) => baseSelector[key](_.get(state, statePath, state), ...args);
        return final;
    }, {})
);

export default createSelector;
