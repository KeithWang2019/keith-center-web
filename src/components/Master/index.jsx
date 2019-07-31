import React from 'react';

import { connect } from 'react-redux';

import { loadQuickNavigation } from 'store/actions/master';
import QuickNavigation from './QuickNavigation';
import UserPanel from './UserPanel';

class Master extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadQuickNavigation();
    }

    render() {
        return (
            <div>
                <div className="wrapper top">
                    <div className="head-container">
                        <div className="logo"></div>
                    </div>
                </div>
                <div>
                    <div className="wrapper middle">
                        <div className="left">
                            <UserPanel></UserPanel>
                            <QuickNavigation></QuickNavigation>
                        </div>
                        <div className="right">{this.props.children}</div>
                    </div>
                </div>
                <div className="wrapper bottom"></div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loadQuickNavigation: id => {
        dispatch(loadQuickNavigation()).then(() => {
            console.log("导航加载完成");
        });
    }
});

export default connect(null, mapDispatchToProps)(Master);