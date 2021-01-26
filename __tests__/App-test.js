import React from 'react';
import { create } from 'react-test-renderer'
import TodoListScreen from '../src/screens/list/TodoListScreen'

const todoListScreen = ( <TodoListScreen /> );

test('Iniciar o App', () => {
    expect(todoListScreen).toMatchSnapshot();
})