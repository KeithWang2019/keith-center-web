const quickNavigationItems = (state = [], action) => {
    switch (action.type) {
        case "loadQuickNavigation":
            return [
                {
                    type: "group",
                    to: "/hello",
                    label: "组1",
                },
                {
                    label: "主机",
                    to: "/hello/d"
                },
                {
                    label: "主机",
                    to: "/hello/e"
                },
                {
                    type: "group",
                    to: "/about",
                    label: "组2",
                },
                {
                    label: "主机2",
                    to: "/about/c"
                }
            ];
        default:
            return state;
    }
}

export default quickNavigationItems;