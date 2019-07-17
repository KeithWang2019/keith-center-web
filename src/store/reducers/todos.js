const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                1, 2, 3
            ];
        default:
            return state;
    }
}

export default todos;