import React from 'react';
import { BrowserRouter as Router, Route, Link, matchPath } from "react-router-dom";

import { connect } from 'react-redux';

function QuickNavigationItem({ to, type, label }) {
    switch (type) {
        case "group":
            const match = matchPath(document.location.pathname, {
                path: to,
                exact: false,
                strict: false
            });

            return (
                <div className={match ? "open" : ""}>{match ? ">" : ""}{label}</div>
            );
        default:
            return (
                <Route
                    path={to}
                    exact={true}
                    children={({ match }) => (
                        <div className={match ? "active" : ""}>
                            {match ? ">" : ""}
                            <Link to={to}>{label
                            }</Link>
                        </div>
                    )}
                />
            );
    }
}

function QuickNavigation(props) {
    const quickNavigation = props.quickNavigation;
    return (
        <div className="quick-navigation">
            {
                quickNavigation.map((item, index) =>
                    <QuickNavigationItem to={item.to} label={item.label} type={item.type} key={index} />
                )
            }
        </div>
    );
}

const mapStateToProps = state => ({
    quickNavigation: state.quickNavigation
});

const mapDispatchToProps = dispatch => ({
    myClick: id => {
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickNavigation);