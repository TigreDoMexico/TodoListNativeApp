import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { TaskListReducer, addNewTask, ADD_NEW } from '../src/store/reducers/TaskListReducer/index';
import Task from '../src/model/task';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

describe('action', () => {
    it('Should create an action to add a todo', () => {
        const task = new Task('Elemento')
        const expectedAction = {
            type: ADD_NEW,
            task: task
        }

        expect(addNewTask(task)).toEqual(expectedAction);
    })
})