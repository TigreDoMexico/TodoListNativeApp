import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    colorList: string[],
    selectedColor: string,
    onSelectColor: (color: string) => void,
}

const ColorPicker = (props: Props) => {
    return (
        <View style={styles.container}>
            {props.colorList.map(el =>
            (
                <TouchableOpacity key={el} onPress={() => props.onSelectColor(el)}>
                    <View style={
                        el === props.selectedColor ?
                        [styles.colorContainer, styles.colorContainerSelected, {backgroundColor: el}] :
                        [styles.colorContainer, {backgroundColor: el}]
                    }/>
                </TouchableOpacity>
            )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    colorContainer: {
        width: 60,
        height: 40
    },
    colorContainerSelected: {
        borderWidth: 3,
        borderColor: 'black',
    },
});

export default ColorPicker;