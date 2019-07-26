import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todos from './reducers/todos';
import xxx from './reducers/xxx';
import quickNavigation from './reducers/quickNavigation';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers({
    todos,
    xxx,
    quickNavigation
}), composeEnhancers(applyMiddleware(thunk)));