const quickNavigationItems = (state = [], action) => {
    switch (action.type) {
        case "loadQuickNavigation":
            return [
                {
                    label: "主机",
                    to: "/",
                    activeOnlyWhenExact: true
                },
                {
                    label: "主机2",
                    to: "/about",
                    activeOnlyWhenExact: false
                }
            ];
        default:
            return state;
    }
}

export default quickNavigationItems;