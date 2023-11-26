// import { createSelector } from 'reselect';
import StoreConfig from '@dlt-object-base/storeConfig';
import objectSelector from '@dlt-module-base/object/objectSelector';
import createSelector from '@dlt-module-base/utils/createSelector';

const statePath = [StoreConfig.employer];

const employerSelector = createSelector(objectSelector, statePath);

export default employerSelector;
