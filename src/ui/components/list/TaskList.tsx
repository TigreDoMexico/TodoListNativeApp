import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import iTask from '../../../model/interface/iTask';

import Task from '../../../model/task';
import TaskListItem from './listItems/TaskListItem';

type Props = {
    tasks: Array<iTask>,
    onChangeTaskStatus: (id: string) => void
    onEdit: (id: string) => void
}

const TaskList = (props: Props) => {
    return (
        <FlatList
            data={props.tasks}
            renderItem={({ item }) => (
                <TaskListItem
                    task={item}
                    onChangeTaskStatus={props.onChangeTaskStatus}
                    onEdit={props.onEdit}
                />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
                <View style={{height: 8}}></View>
            )}
        />
    )
}

export default TaskList;