// import { createSelector } from 'reselect';
import StoreConfig from '../../storeConfig';
import objectSelector from '../../dlt-base/object/objectSelector';
import createSelector from '../../dlt-base/utils/createSelector';

const statePath = [StoreConfig.job];

const jobSelector = createSelector(objectSelector, statePath);

export default jobSelector;
