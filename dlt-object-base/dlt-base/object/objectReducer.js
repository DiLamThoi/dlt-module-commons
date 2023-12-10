import { clearDeep } from '@dlt-module-base/utils/lodash';

// Thêm mới 1 object
const add = (state, action) => {
    const { data } = action.payload;
    const { id } = data;
    if (!id) throw new Error('ObjectReducer::add objectData requires an id');
    if (state[id]) throw new Error('ObjectReducer::add id already exists');
    else state[id] = { data };
    return state;
};

// Cập nhật lại dữ liệu trong 1 object
const update = (state, action) => {
    const { id, data } = action.payload;
    if (!state[id]) throw new Error('ObjectReducer::update id does not exist');
    else state[id] = { ...state[id], ...data };
    return state;
};

// Cập nhật lại 1 object
const patch = (state, action) => {
    const { id, data } = action.payload;
    if (!state[id]) throw new Error('ObjectReducer::patch id does not exist');
    else state[id] = { ...data };
    return state;
};

// Xóa 1 object
const remove = (state, action) => {
    const { id } = action.payload;
    if (state[id]) clearDeep(state[id]);
    return state;
};

// Thêm mới nhiều object
const addList = (state, action) => {
    const { datas } = action.payload;
    datas.forEach((data) => {
        const { id } = data;
        if (!id) throw new Error('ObjectReducer::addList objectData requires an id');
        if (state[id]) throw new Error('ObjectReducer::addList id already exists');
        else state[id] = { data };
    });
    return state;
};

// Xóa nhiều object
const removeList = (state, action) => {
    const { ids = [] } = action.payload;
    ids.forEach((id) => {
        if (state[id]) clearDeep(state[id]);
    });
    return state;
};

const objectReducers = {
    add,
    update,
    patch,
    remove,
    addList,
    removeList,
};

export default objectReducers;
