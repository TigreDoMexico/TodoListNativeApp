import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { DARK_BLUE, DEFAULT_WHITE } from '../../consts/colors';

type Props = {
    onPress: (event: any) => void,
    name: string
}

const DefaultButton = (props: Props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: DARK_BLUE,
        paddingHorizontal: 18,
        paddingVertical: 8,
    },
    buttonText: {
        fontSize: 15,
        color: DEFAULT_WHITE,
    }
})

export default DefaultButton;