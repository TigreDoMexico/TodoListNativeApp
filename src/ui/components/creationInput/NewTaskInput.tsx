import React, { Component } from 'react';
import { Platform, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Task from '../../../model/task';
import { DARK_BLUE, DEFAULT_WHITE, LIGHT_BLUE } from '../../consts/colors';
import DefaultButton from '../button/DefaultButton';
import DefaultInput from './inputs/DefaultInput';

type Props = {
    placeholder: string,
    onSaveTask: (name: string) => void,
}

class NewTaskInput extends Component<Props> {
    state = {
        typedTaskName: '',
        inputReference: React.createRef<TextInput>()
    }

    createTask = () => {
        var taskName = this.state.typedTaskName

        if(taskName){
            this.props.onSaveTask(taskName);
            this.setState({
                typedTaskName: '',
            })
        }
    }

    onTypeNameHandler = (name: string) => {
        this.setState({ typedTaskName: name });
    }

    render() {
        return (
            <View style={styles.container}>
                <DefaultInput
                    placeholder={this.props.placeholder}
                    onChangeText={this.onTypeNameHandler}
                    value={this.state.typedTaskName}
                />
                <View style={styles.addButton}>
                    <DefaultButton
                        onPress={this.createTask}
                        name="Adicionar"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    addButton: {
        marginLeft: 10,
    }
});

export default NewTaskInput;