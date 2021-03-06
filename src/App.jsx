import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import TodoList from './components/TodoList';
// import XxxList from './components/XxxList';

const TodoList = React.lazy(() => import('components/TodoList'));
const XxxList = React.lazy(() => import('components/XxxList'));

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={TodoList} />
                <Route path="/about" component={XxxList} />
            </Switch>
        </Suspense>
    </Router>
)


export default App;