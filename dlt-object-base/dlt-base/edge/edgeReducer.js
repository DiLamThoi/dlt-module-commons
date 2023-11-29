const addList = (state, action) => {
    const { parentId, ids } = action.payload;
    if (!state[parentId]) {
        state[parentId] = { itemIds: ids };
    }
    return state;
};

const edgeReducers = {
    addList,
};

export default edgeReducers;
