//action 定义
export const masterAction = id => ({
    type: 'loadQuickNavigation',
    id
})

//action 访问
export function loadQuickNavigation() {
    return function (dispatch) {
        dispatch(masterAction(2));

        return new Promise((y, x) => {
            y("hello");
        });
    }
}