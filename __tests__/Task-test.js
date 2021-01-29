import Task from '../src/model/task'
import {SOFT_GREEN} from '../src/ui/consts/colors'

const DEFAULT_NAME = "Tarefa 1"

test('Criar um objeto tarefa - Esperado não ser nulo ou undefined', () => {
    const task = new Task(DEFAULT_NAME)

    expect(task).not.toBeNull()
    expect(task).not.toBeUndefined()
})

test('Criar um objeto tarefa sem passar um nome - Esperado um nome vazio', () => {
    const task = new Task()

    expect(task.name).toEqual('')
})

test('Criar um objeto tarefa passando um nome - Esperado o nome ser o nome passado', () => {
    const task = new Task(DEFAULT_NAME)

    expect(task.name).toEqual(DEFAULT_NAME)
})

test('Alterando o ID de uma tarefa - Esperado não deixar alterar', () => {
    const newId = "ABCDE"
    const task = new Task(DEFAULT_NAME)

    task.id = newId;

    expect(task.id).not.toEqual(newId)
})

test('Alterando a cor de uma tarefa - Esperado ser a cor alterada', () => {
    const task = new Task(DEFAULT_NAME)
    task.color = SOFT_GREEN;

    expect(task.color).toEqual(SOFT_GREEN)
})

test('Alterando a cor de uma tarefa para um valor null - Esperado não alterar a cor', () => {
    const task = new Task(DEFAULT_NAME)
    task.color = null;

    expect(task.color).not.toBeNull()
})