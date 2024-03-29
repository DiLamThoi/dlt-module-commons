// import { createSelector } from 'reselect';
import StoreConfig from '@dlt-object-base/storeConfig';
import edgeSelector from '@dlt-object-base/dlt-base/edge/edgeSelector';
import createSelector from '@dlt-module-base/utils/createSelector';

const statePath = [StoreConfig.hasUser];

const hasUserSelector = createSelector(edgeSelector, statePath);

export default hasUserSelector;
