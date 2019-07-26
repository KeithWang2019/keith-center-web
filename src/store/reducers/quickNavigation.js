const quickNavigationItems = (state = [], action) => {
    switch (action.type) {
        case "loadQuickNavigation":
            return [
                {
                    type: "group",
                    to: "/hello",
                    label: "组1",
                    child: [
                        {
                            label: "主机",
                            to: "/hello/d"
                        },
                        {
                            label: "主机",
                            to: "/hello/e"
                        }
                    ]
                },
                {
                    type: "group",
                    to: "/about",
                    label: "组2",
                    child: [
                        {
                            type: "group",
                            to: "/about/a",
                            label: "组3",
                        },
                        {
                            type: "group",
                            to: "/about/b",
                            label: "组4",
                            child: [
                                {
                                    label: "主机2",
                                    to: "/about/b/c"
                                }
                            ]
                        }
                    ]
                }
            ];
        default:
            return state;
    }
}

export default quickNavigationItems;