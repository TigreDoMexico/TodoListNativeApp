import { combineReducers } from 'redux';

import { TaskListReducer } from './reducers/TaskListReducer/index'

export const Reducers = combineReducers({
    taskListState: TaskListReducer,    
});