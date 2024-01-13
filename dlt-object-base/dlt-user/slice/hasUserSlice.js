import { createEdgeSlice } from '@dlt-object-base/dlt-base/utils/createSlice';
import StoreConfig from '@dlt-object-base/storeConfig';

const hasUserSlice = createEdgeSlice(StoreConfig.hasUser);

export default hasUserSlice;
