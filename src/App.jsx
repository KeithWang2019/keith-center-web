import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import TodoList from './components/TodoList';
// import XxxList from './components/XxxList';

import Home from 'components/Home';
import NoMatch from 'components/NoMatch';
const TodoList = React.lazy(() => import('components/TodoList'));
const XxxList = React.lazy(() => import('components/XxxList'));

const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/hello/d" component={TodoList} />
                <Route path="/hello/e" component={TodoList} />
                <Route path="/about/b/c" component={XxxList} />
                <Route component={NoMatch} />
            </Switch>
        </Suspense>
    </Router>
)


export default App;