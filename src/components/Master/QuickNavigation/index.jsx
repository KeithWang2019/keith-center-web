import React from 'react';
import { BrowserRouter as Router, Route, Link, matchPath } from "react-router-dom";
import classNames from 'classnames';

import { connect } from 'react-redux';

class QuickNavigationItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClick = () => {
        this.setState(state => ({
            open: !state.open
        }));
    }

    isOpen() {
        const match = matchPath(document.location.pathname, {
            path: this.props.to,
            exact: false,
            strict: false
        });

        return match || this.state.open;
    }

    render() {
        switch (this.props.type) {
            case "group":
                const listItems = this.props.child && this.props.child.map((item, index) => {
                    return (<QuickNavigationItem to={item.to} label={item.label} type={item.type} key={index} child={item.child} level={this.props.level + 1} icon={item.icon} />)
                });

                return (
                    <div>
                        <a>
                            <div className={classNames("quick-nav", "quick-nav-group", { "open": this.isOpen(), "close": !this.isOpen() })} style={{ paddingLeft: this.props.level * 12 }} onClick={this.handleClick}>
                                <svg className="cac-icon" style={{ fontSize: 16 }} aria-hidden="true"><use xlinkHref={classNames({ '#cac-folder': !this.isOpen(), '#cac-folder-open': this.isOpen() })}></use></svg>
                                <span>{this.props.label}</span>
                            </div>
                        </a>
                        {
                            listItems &&
                            <div className={classNames("quick-nav-group-list", { "open": this.isOpen(), "close": !this.isOpen() })}>
                                {listItems}
                            </div>
                        }
                    </div >
                );
            default:
                return (
                    <Route
                        path={this.props.to}
                        exact={true}
                        children={({ match }) => (
                            <Link to={this.props.to}>
                                <div className={classNames("quick-nav", "quick-nav-item", { "active": match })} style={{ paddingLeft: this.props.level * 12 }}>
                                    <svg className="cac-icon" style={{ fontSize: 14 }} aria-hidden="true"><use xlinkHref={this.props.icon}></use></svg><span>{this.props.label}</span>
                                </div>
                            </Link>
                        )}
                    />
                );
        }
    }
}

function QuickNavigation(props) {
    const quickNavigation = props.quickNavigation;

    return (
        <div className="quick-navigation">
            {
                quickNavigation.map((item, index) => {
                    return (<QuickNavigationItem to={item.to} label={item.label} type={item.type} key={index} child={item.child} level={1} icon={item.icon} />)
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