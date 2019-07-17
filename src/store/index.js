import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todos from './reducers/todos';
import xxx from './reducers/xxx';

export default createStore(combineReducers({
    todos,
    xxx
}), applyMiddleware(thunk));