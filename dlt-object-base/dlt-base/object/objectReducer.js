const add = (state, action) => {
    const { id, data } = action.payload;
    if (!state[id]) {
        state[id] = { data };
    }
    return state;
};

const objectReducers = {
    add,
};

export default objectReducers;
