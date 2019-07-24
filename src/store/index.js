import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todos from './reducers/todos';
import xxx from './reducers/xxx';
import quickNavigation from './reducers/quickNavigation';

export default createStore(combineReducers({
    todos,
    xxx,
    quickNavigation
}), applyMiddleware(thunk));