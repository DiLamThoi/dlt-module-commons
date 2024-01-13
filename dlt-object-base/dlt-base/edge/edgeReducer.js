// Tạo mới edge
const create = (state, parentId, searchParams = {}) => {
    if (state[parentId]) throw new Error('EdgeReducer::create parentId already exists');
    else {
        state[parentId] = {
            itemIds: [],
            items: {},
            total: 0,
            searchParams,
        };
    }
};

// Thêm mới 1 edge
const add = (state, action) => {
    const { parentId, id, data = {} } = action.payload;
    if (!state[parentId]) create(state, parentId);
    if (state[parentId].itemIds.includes(id)) throw new Error('EdgeReducer::update id already exists');
    state[parentId].itemIds.push(id);
    state[parentId].items[id] = { data };
    state[parentId].total += 1;
    return state;
};

// Cập nhật dữ liệu của 1 edge
const update = (state, action) => {
    const { parentId, id, data = {} } = action.payload;
    if (!state[parentId]) throw new Error('EdgeReducer::update parentId does not exists');
    if (!state[parentId].itemIds.includes(id)) throw new Error('EdgeReducer::update id already exists');
    state[parentId].items[id].data = { ...state[parentId].items[id], ...data };
    return state;
};

// Cập nhật lại 1 edge
const patch = (state, action) => {
    const { parentId, id, data = {} } = action.payload;
    if (!state[parentId]) throw new Error('EdgeReducer::patch parentId does not exists');
    if (!state[parentId].itemIds.includes(id)) throw new Error('EdgeReducer::patch id already exists');
    state[parentId].items[id] = { data };
    return state;
};

// Xóa 1 edge
const remove = (state, action) => {
    const { parentId, id } = action.payload;
    if (!state[parentId]) throw new Error('EdgeReducer::remove parentId does not exists');
    if (!state[parentId].itemIds.includes(id)) {
        state[parentId].itemIds.filter((itemId) => itemId !== id);
        delete state[parentId].items[id];
        state[parentId].total -= 1;
    }
    return state;
};

// Xóa edge
const clear = (state, action) => {
    const { parentId } = action.payload;
    if (state[parentId]) delete state[parentId];
};

// Thêm mới nhiều edge
const addList = (state, action) => {
    const { parentId, ids } = action.payload;
    if (!state[parentId]) create(state, parentId);
    ids.forEach((id) => {
        if (!state[parentId].itemIds.includes(id)) {
            state[parentId].itemIds.push(id);
            state[parentId].items[id] = {};
            state[parentId].total += id;
        }
    });
    return state;
};

// Cập nhật dữ liệu của nhiều edge
const removeList = (state, action) => {
    const { parentId, ids } = action.payload;
    ids.forEach((id) => {
        if (!state[parentId]) throw new Error('EdgeReducer::remove parentId does not exists');
        if (!state[parentId].itemIds.includes(id)) {
            state[parentId].itemIds.filter((itemId) => itemId !== id);
            delete state[parentId].items[id];
            state[parentId].total -= 1;
        }
        return state;
    });
};

// Xóa nhiều edge
const clearList = (state, action) => {
    const { parentIds } = action.payload;
    parentIds.forEach((parentId) => {
        if (state[parentId]) delete state[parentId];
    });
};

const edgeReducers = {
    create,
    add,
    update,
    patch,
    remove,
    clear,
    addList,
    removeList,
    clearList,
};

export default edgeReducers;
