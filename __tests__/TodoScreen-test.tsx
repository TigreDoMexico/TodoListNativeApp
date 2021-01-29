import React from 'react'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'

import TodoListScreen from '../src/screens/list/TodoListScreen';
import { TaskListReducer } from '../src/store/reducers/TaskListReducer/index';
import iTask from '../src/model/interface/iTask';
import { BLUE } from '../src/ui/consts/colors';

var initialState = [
    {
        id: "1",
        name: "Tarefa 1",
        color: BLUE,
        isDone: false,
    } as iTask,
];

const store = createStore(
    TaskListReducer,
    {tasks: initialState},
    applyMiddleware(thunk),
);

//TODO -> ERROR Cannot read property 'task' of undefined
const tree = renderer.create(
    <Provider store={store}>
        <TodoListScreen />
    </Provider>
).toJson();

// test('Criando uma tela de tarefas - Esperado combinar com o Snapshot',() => {
//     expect(tree).toMatchSnapshot();
// })







