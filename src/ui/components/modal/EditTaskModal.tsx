import React, { Component } from 'react';
import { View, StyleSheet, Text, Platform, Dimensions } from 'react-native';
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons';

import { BLUE, DANGER_COLOR, DARK_BLUE, DEFAULT_WHITE, PURPLE, ORANGE, SOFT_GREEN, SUCCESS_COLOR, PINK, } from '../../consts/colors';
import DefaultButton from '../button/DefaultButton';
import DefaultInput from '../creationInput/inputs/DefaultInput';
import ColorPicker from '../colorpicker/ColorPicker';
import CustomButton from '../button/CustomButton';
import iTask from '../../../model/interface/iTask';

const SCREEN_WIDTH = Dimensions.get('window').width;

type Props = {
    isVisible: boolean,
    onSaveTask: (task: iTask) => void,
    onDeleteTask: (id: string) => void,
    onCloseWithoutChange: () => void,
    task: iTask
}

class EditTaskModal extends Component<Props> {
    state = {
        currentTask: this.props.task,
        disableSave: false,
    }

    onChangeTaskName = (newName: string) => {
        let task = this.state.currentTask;
        task.name = newName;

        this.setState({
            currentTask: task,
            disableSave: newName === ''
        })
    }

    onChangeTaskColor = (newColor: string) => {
        let task = this.state.currentTask;
        task.color = newColor;

        this.setState({
            currentTask: task
        })
    }

    render() {
        const task = this.props.task;

        return task ?
            (
                <View style={{ flex: 1 }}>
                    <Modal
                        isVisible={this.props.isVisible}
                        avoidKeyboard
                        onBackdropPress={this.props.onCloseWithoutChange}
                        onBackButtonPress={this.props.onCloseWithoutChange}
                        style={{justifyContent: 'flex-end', margin: 0}}
                    >
                        <View style={styles.modalContent}>
                            <View>
                                <Text style={styles.title}>Edição da Tarefa</Text>
                            </View>
                            <View style={styles.taskNameContainer}>
                                {this.state.disableSave ? <Text style={{color: DANGER_COLOR}}>A tarefa não pode ter um nome vazio</Text> : null}
                                <View style={{height: 50}}>
                                    <DefaultInput
                                        onChangeText={this.onChangeTaskName}
                                        placeholder="Nome da tarefa"
                                        value={task.name}
                                    />
                                </View>
                            </View>
                            <View style={styles.colorContainer}>
                                <Text style={styles.colorContainerTitle}>Cor da Tarefa</Text>
                                <ColorPicker
                                    selectedColor={task.color}
                                    colorList={[BLUE, ORANGE, SOFT_GREEN, PURPLE, PINK]}
                                    onSelectColor={this.onChangeTaskColor}
                                />
                            </View>
                            <View style={styles.actionContainer}>
                                <CustomButton
                                    onPress={() => this.props.onDeleteTask(this.state.currentTask.id)}
                                    customStyle={styles.deleteButton}
                                >
                                    <View style={styles.buttonContent}>
                                        <Text style={styles.buttonText}>Excluir</Text>
                                        <Ionicons name={Platform.OS == 'ios' ? "ios-trash" : "md-trash"} size={20} color={DEFAULT_WHITE} />
                                    </View>
                                </CustomButton>
                                <CustomButton
                                    onPress={() => this.props.onSaveTask(this.state.currentTask)}
                                    customStyle={styles.saveButton}
                                    disabled={this.state.disableSave}
                                >
                                    <View style={styles.buttonContent}>
                                        <Text style={styles.buttonText}>Salvar</Text>
                                        <Ionicons name={Platform.OS == 'ios' ? "ios-thumbs-up" : "md-thumbs-up"} size={20} color={DEFAULT_WHITE} />
                                    </View>
                                </CustomButton>
                            </View>
                        </View>
                    </Modal>
                </View>
            ) : null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        height: '40%',
        backgroundColor: DEFAULT_WHITE,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
    },
    title: {
      color: DARK_BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20
    },
    taskNameContainer: {
        marginTop: 20,
        marginBottom: 30,
        height: 50
    },
    colorContainer: {
        marginBottom: 20
    },
    colorContainerTitle: {
        fontSize: 15,
        color: DARK_BLUE,
        marginBottom: 10
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },

    buttonContent: {
        flexDirection: 'row',
    },
    buttonText: {
        color: DEFAULT_WHITE,
        fontSize: 18,
        marginRight: 10
    },
    saveButton: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: SUCCESS_COLOR,
        width: SCREEN_WIDTH / 2
    },
    deleteButton: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: DANGER_COLOR,
        width: SCREEN_WIDTH / 2
    }
});

export default EditTaskModal;