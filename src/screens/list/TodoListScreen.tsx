import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import iTask from '../../model/interface/iTask';
import Task from '../../model/task';
import NewTaskInput from '../../ui/components/creationInput/NewTaskInput';
import TaskList from '../../ui/components/list/TaskList';
import EditTaskModal from '../../ui/components/modal/EditTaskModal';

import { iTaskListReducer } from '../../store/reducers/TaskListReducer/types';

import Screen from '../Screen';

class TodoListScreen extends Component {
    state = {
        tasks: Array<iTask>(),
        isEditingTask: false,
        editTaskId: "",
    }

    taskList = useSelector((state: {TaskListReducer: iTaskListReducer}) => 
                            state.TaskListReducer.tasks)
    dispatch = useDispatch()

    getTaskIndexById = (taskId: string) => this.state.tasks.map(el => el.id).indexOf(taskId);

    onChangeTaskStatusHandler = (taskId: string) => {
        let newTaskList = this.state.tasks.map(el => {
            if (el.id === taskId)
                el.isDone = !el.isDone;

            return el;
        });

        this.setState({
            tasks: newTaskList
        });
    }

    onAskToEditHandler = (taskId: string) => {
        this.setState({
            isEditingTask: true,
            editTaskId: taskId,
        });
    }

    onAskToEndEditionHandler = () => {
        this.setState({
            isEditingTask: false,
            editTaskId: "",
        });
    }

    onUpdateTask = (task: iTask) => {
        let newTaskList = this.state.tasks
        let index = this.getTaskIndexById(task.id);

        if(index != -1)
            newTaskList[index] = task;

        this.setState({
            tasks: newTaskList,
            isEditingTask: false,
            editTaskId: "",
        });
    }

    onDeleteTask = (taskId: string) => {
        let newTaskList = this.state.tasks
        let index = this.getTaskIndexById(taskId);

        if(index != -1)
            newTaskList.splice(index, 1);

        this.setState({
            tasks: newTaskList,
            isEditingTask: false,
            editTaskId: "",
        });
    }

    onSaveTaskHandler = (taskName: string) => {
        var task = new Task(taskName)

        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    _createEditModal = (taskId: string) => {
        let index = this.getTaskIndexById(taskId);

        if(index !== -1){
            var task = this.state.tasks[index] as Task;

            return (
                <EditTaskModal
                    isVisible={this.state.isEditingTask}
                    task={task.clone()}
                    onSaveTask={this.onUpdateTask}
                    onDeleteTask={this.onDeleteTask}
                    onCloseWithoutChange={this.onAskToEndEditionHandler}
                />
            )
        }

        return null;
    }

    render() {
        return (
            <Screen pageTitle="Lista de Tarefas">
                <View style={styles.addTaskContainer}>
                    <NewTaskInput placeholder="Escreva a tarefa aqui" onSaveTask={this.onSaveTaskHandler} />
                </View>
                <View style={styles.taskListContainer}>
                    <TaskList
                        tasks={this.state.tasks}
                        onChangeTaskStatus={this.onChangeTaskStatusHandler}
                        onEdit={this.onAskToEditHandler}
                    />
                </View>
                {this.state.isEditingTask !== null ?
                    this._createEditModal(this.state.editTaskId) : null
                }
            </Screen>
        );
    }
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