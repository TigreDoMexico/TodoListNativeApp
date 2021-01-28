import React, { Component, createRef, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import iTask from '../../model/interface/iTask';
import Task from '../../model/task';
import NewTaskInput from '../../ui/components/creationInput/NewTaskInput';
import TaskList from '../../ui/components/list/TaskList';
import EditTaskModal from '../../ui/components/modal/EditTaskModal';

import { iTaskListReducer } from '../../store/reducers/TaskListReducer/types';

import Screen from '../Screen';
import { addNewTask, changeTaskStatus, deleteTask, updateTask } from '../../store/reducers/TaskListReducer';
import { ModalHandles } from '../../ui/components/modal/EditTaskModal/types';

const TodoListScreen = () => {
    const editModalRef = createRef<ModalHandles>();
    
    const taskList = useSelector((state: { TaskListState: iTaskListReducer }) =>
        state.TaskListState.tasks)

    const dispatch = useDispatch()

    const onChangeTaskStatusHandler = (taskId: string) => dispatch(changeTaskStatus(taskId))    

    const onEditTaskHandler = (taskId: string) => {
        editModalRef.current?.openModal();
        editModalRef.current?.setTask(taskList.filter(el => el.id === taskId)[0]);
    }

    const onUpdateTask = (task: iTask) => dispatch(updateTask(task));
    
    const onDeleteTask = (taskId: string) => dispatch(deleteTask(taskId))

    const onSaveTaskHandler = (taskName: string) => {
        var task = new Task(taskName)
        dispatch(addNewTask(task))
    }

    return (
        <Screen pageTitle="Lista de Tarefas">
            <View style={styles.addTaskContainer}>
                <NewTaskInput placeholder="Escreva a tarefa aqui" onSaveTask={onSaveTaskHandler} />
            </View>
            <View style={styles.taskListContainer}>
                <TaskList
                    tasks={taskList}
                    onChangeTaskStatus={onChangeTaskStatusHandler}
                    onEdit={onEditTaskHandler}
                />
            </View>            
            <EditTaskModal
                ref={editModalRef}
                onSaveTask={onUpdateTask}
                onDeleteTask={onDeleteTask}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    addTaskContainer: {
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 20
    },
    taskListContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 10,
    }
});

export default TodoListScreen;