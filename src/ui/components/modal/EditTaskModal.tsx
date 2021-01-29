import React, { Component, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { View, StyleSheet, Text, Platform, Dimensions } from 'react-native';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome';

import { BLUE, DANGER_COLOR, DARK_BLUE, DEFAULT_WHITE, PURPLE, ORANGE, SOFT_GREEN, SUCCESS_COLOR, PINK, } from '../../consts/colors';
import DefaultButton from '../button/DefaultButton';
import DefaultInput from '../creationInput/inputs/DefaultInput';
import ColorPicker from '../colorpicker/ColorPicker';
import CustomButton from '../button/CustomButton';
import iTask from '../../../model/interface/iTask';
import { ModalHandles, ModalProps } from './EditTaskModal/types';
import Task from '../../../model/task';

const SCREEN_WIDTH = Dimensions.get('window').width;

const emptyTask: iTask = {
    id: '',
    name: '',
    color: '',
    isDone: false,
}

const EditTaskModal = React.forwardRef<ModalHandles, ModalProps>((props, ref) => {
    const [visible, setVisible] = useState(false);
    const [task, setTask] = useState(emptyTask);

    useImperativeHandle(ref, () => (
        {
            openModal: handleOpenModal,
            setTask: setInitialTask
        }
    ));

    const handleOpenModal = useCallback(() => {
        setVisible(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setVisible(false);
    }, []);

    const setInitialTask = useCallback((initialTask: Task) => {
        setTask(initialTask);
    }, []);


    const onChangeTaskName = (newName: string) => {
        var newTask = { ...task };
        newTask.name = newName
        newTask.color = task.color;
        newTask.id = task.id;
        newTask.isDone = task.isDone;

        setTask(newTask);
    }

    const onChangeTaskColor = (newColor: string) => {
        var newTask = { ...task };
        newTask.color = newColor
        newTask.name = task.name;
        newTask.id = task.id;
        newTask.isDone = task.isDone;

        setTask(newTask);
    }

    const onSaveTask = () => {
        props.onSaveTask(task)
        handleCloseModal()
    }

    const onDeleteTask = () => {
        props.onDeleteTask(task.id)
        handleCloseModal()
    }

    return (
        <View style={{ flex: 1 }}>
            <Modal
                isVisible={visible}
                avoidKeyboard
                onBackdropPress={handleCloseModal}
                onBackButtonPress={handleCloseModal}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <View style={styles.modalContent}>
                    <View>
                        <Text style={styles.title}>Edição da Tarefa</Text>
                    </View>
                    <View style={styles.taskNameContainer}>
                        {task.name === '' ? <Text style={{ color: DANGER_COLOR }}>A tarefa não pode ter um nome vazio</Text> : null}
                        <View style={{ height: 50 }}>
                            <DefaultInput
                                onChangeText={onChangeTaskName}
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
                            onSelectColor={onChangeTaskColor}
                        />
                        <Text>
                            <Text>{task.name}</Text>
                            <Text>{task.color}</Text>
                            <Text>{task.isDone}</Text>
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <CustomButton
                            onPress={onDeleteTask}
                            customStyle={styles.deleteButton}
                        >
                            <View style={styles.buttonContent}>
                                <Text style={styles.buttonText}>Excluir</Text>
                                <Icon name='trash' size={20} color={DEFAULT_WHITE} />
                            </View>
                        </CustomButton>
                        <CustomButton
                            onPress={onSaveTask}
                            customStyle={styles.saveButton}
                            disabled={task.name === ''}
                        >
                            <View style={styles.buttonContent}>
                                <Text style={styles.buttonText}>Salvar</Text>
                                <Icon name='thumbs-up' size={20} color={DEFAULT_WHITE} />
                            </View>
                        </CustomButton>
                    </View>
                </View>
            </Modal>
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        height: '50%',
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