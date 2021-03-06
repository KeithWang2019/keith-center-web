export const toggleTodo = id => ({
    type: 'ADD_TODO',
    id
})

export function test() {
    return function (dispatch) {
        dispatch(toggleTodo(2));

        return new Promise((y, x) => {
            setTimeout(() => {
                y("hello");
            }, 5000);
        });
    }
}