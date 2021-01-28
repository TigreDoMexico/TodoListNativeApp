import React from 'react';
import { FlatList, StyleSheet, View, Text, Platform, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BLUE, DEFAULT_WHITE, SOFT_GREEN } from '../../../consts/colors';
import CustomButton from '../../button/CustomButton';
import DefaultCheckbox from '../../checkbox/DefaultCheckbox';
import EditTaskModal from '../../modal/EditTaskModal';
import iTask from '../../../../model/interface/iTask';

type Props = {
    task: iTask,
    onChangeTaskStatus: (id: string) => void
    onEdit: (id: string) => void
}

const TaskListItem = (props: Props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.task.color }]}>
            <DefaultCheckbox isChecked={props.task.isDone} onPress={() => props.onChangeTaskStatus(props.task.id)} />
            <TouchableWithoutFeedback onPress={() => props.onEdit(props.task.id)}>
                <Text style={styles.taskName}>{props.task.name}</Text>
            </TouchableWithoutFeedback>
            <CustomButton
                onPress={() => props.onEdit(props.task.id)}
                customStyle={styles.editButton}
            >
                <Icon name='cog' size={20} color={DEFAULT_WHITE} />
            </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: BLUE,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        minHeight: 50,
    },
    taskName: {
        color: DEFAULT_WHITE,
        fontSize: 18,
        width: '80%'
    },
    editButton: {
        width: 25,
        height: 25,
    }
});

export default TaskListItem;