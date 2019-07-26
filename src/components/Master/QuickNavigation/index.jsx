import React from 'react';
import { BrowserRouter as Router, Route, Link, matchPath } from "react-router-dom";
import classNames from 'classnames';

import { connect } from 'react-redux';

function QuickNavigationItem({ to, type, label, child, level }) {
    switch (type) {
        case "group":
            const match = matchPath(document.location.pathname, {
                path: to,
                exact: false,
                strict: false
            });


            const listItems = child && child.map((item, index) => {
                return (<QuickNavigationItem to={item.to} label={item.label} type={item.type} key={index} child={item.child} level={level + 1} />)
            });

            return (
                <div>
                    <div className={classNames("quick-nav", "quick-nav-group", { "open": match })} style={{ paddingLeft: level * 12 }}>{label}</div>
                    {listItems &&
                        <div>
                            {listItems}
                        </div>
                    }
                </div>
            );
        default:
            return (
                <Route
                    path={to}
                    exact={true}
                    children={({ match }) => (
                        <div className={classNames("quick-nav", "quick-nav-item", { "active": match })} style={{ paddingLeft: level * 12 }}>
                            <Link to={to}>{label}</Link>
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
                quickNavigation.map((item, index) => {
                    return (<QuickNavigationItem to={item.to} label={item.label} type={item.type} key={index} child={item.child} level={1} />)
                })
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