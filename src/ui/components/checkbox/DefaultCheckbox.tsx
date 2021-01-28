import React from 'react';
import {StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLUE, DEFAULT_WHITE, LIGHT_BLUE } from '../../consts/colors';

type Props = {
    isChecked: boolean,
    onPress: () => void,
}

const DefaultCheckbox = (props: Props) => {
    let checkIcon = props.isChecked ? <Icon name={'check'} size={20} color="green" /> : null;

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.box}>
                {checkIcon}
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    box: {
        width: 25,
        height: 25,
        borderColor: LIGHT_BLUE,
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: DEFAULT_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DefaultCheckbox;