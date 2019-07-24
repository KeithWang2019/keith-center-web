import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';

function QuickNavigationItem({ label, to, activeOnlyWhenExact }) {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
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

function QuickNavigation(props) {
    const quickNavigation = props.quickNavigation;
    return (
        <div className="quick-navigation">
            {
                quickNavigation.map((item) =>
                    <QuickNavigationItem to={item.to} label={item.label} activeOnlyWhenExact={item.activeOnlyWhenExact} key={item.to} />
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