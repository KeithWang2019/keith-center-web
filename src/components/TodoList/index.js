import React from 'react';
import { connect } from 'react-redux';

import { test, toggleTodo } from 'store/actions/index';

import Master from 'components/Master';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        console.log("mount");
    }

    componentWillUnmount() {
        console.log("unmount");
    }

    render() {
        return (
            <Master>
                <ul onClick={this.props.myClick} className="my">
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                    {this.props.todos.map(todo => (
                        <div key={todo}>{todo}==11</div>
                    ))}
                </ul>
            </Master>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    myClick: id => {
        dispatch(test()).then(() => {
            alert("ok");
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);