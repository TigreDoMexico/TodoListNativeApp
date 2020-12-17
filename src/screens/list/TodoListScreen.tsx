import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Task from '../../model/task';
import NewTaskInput from '../../ui/components/creationInput/NewTaskInput';

import Screen from '../Screen';

class TodoListScreen extends Component {
    state = {
        tasks: Array<Task>(),
    }

    onSaveTaskHandler = (taskName: string) => {
        var task = new Task(taskName)

        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        return (
            <Screen pageTitle="Lista de Tarefas">
                <View style={styles.addTaskContainer}>
                    <NewTaskInput placeholder="Escreva a tarefa aqui" onSaveTask={this.onSaveTaskHandler} />
                </View>
                <FlatList
                    data={this.state.tasks}
                    renderItem={({item}) => (
                        <View>
                            <Text> - {item.name}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    addTaskContainer: {
        marginTop: 20,
        marginHorizontal: 20
    },
});

export default TodoListScreen;