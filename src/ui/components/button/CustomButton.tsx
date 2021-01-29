import React from 'react';
import { TouchableOpacity, View, StyleSheet, ViewStyle } from 'react-native';

type Props = {
    onPress: (event: any) => void,
    children: React.ReactNode,
    customStyle?: ViewStyle;
    disabled?: boolean
}

const CustomButton = (props: Props) => {
    const isDisabled = props.disabled ? props.disabled : false;
    const onPressFunc = isDisabled ? () => {} : props.onPress;

    return(
        <TouchableOpacity testID='touchable_custom_button' disabled={isDisabled} onPress={onPressFunc}>
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