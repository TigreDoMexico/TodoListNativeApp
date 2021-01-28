import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'

import { TaskListReducer } from './reducers/TaskListReducer/index'

const reducers = combineReducers({
    TaskListState: TaskListReducer,    
});

const configureStore = createStore(reducers, compose(applyMiddleware(thunk)))

export default configureStore;
