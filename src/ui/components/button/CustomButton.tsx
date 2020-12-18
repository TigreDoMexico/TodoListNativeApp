import React from 'react';
import { TouchableOpacity, View, StyleSheet, ViewStyle } from 'react-native';

type Props = {
    onPress: (event: any) => void,
    children: React.ReactNode,
    customStyle?: ViewStyle;
    disabled?: boolean
}

const CustomButton = (props: Props) => {
    return(
        <TouchableOpacity disabled={props.disabled ? props.disabled : false} onPress={props.onPress}>
            <View style={[styles.button, props.customStyle]}>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CustomButton;