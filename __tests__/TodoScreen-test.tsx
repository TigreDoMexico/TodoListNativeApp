import React from 'react'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'

import configureStore from '../src/store/store'

import TodoListScreen from '../src/screens/list/TodoListScreen';

//TODO -> ERROR Cannot read property 'task' of undefined
const tree = renderer.create(
    <Provider store={configureStore}>
        <TodoListScreen />
    </Provider>
);

test('Criando uma tela de tarefas - Esperado combinar com o Snapshot',() => {
    expect(tree).toMatchSnapshot();
})

describe("Verificando se o Store vem com array vazio", () => {
    it("Precisa vir com o Array de Tasvazio", () => {
        expect(configureStore.getState().TaskListReducer.tasks.length).toEqual(0)
    })
})






