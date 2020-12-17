import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { LIGHT_BLUE } from '../../../consts/colors';

type Props = {
    onChangeText: (name: string) => void,
    placeholder: string
}

const DefaultInput = (props: Props) => {
    return(
        <TextInput
            {...props}
            style={style.input}
        />
    )
}

const style = StyleSheet.create({
    input: {
        borderColor: LIGHT_BLUE,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        flex: 1
    },
})

export default DefaultInput;