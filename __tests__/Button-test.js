import React from 'react';
import {Text} from 'react-native'
import { act, create } from 'react-test-renderer'
import CustomButton from '../src/ui/components/button/CustomButton'

const pressFunc = jest.fn();
const child = (<Text>Teste</Text>)
const buttonComponent = create(<CustomButton onPress={pressFunc}>{child}</CustomButton>)

test('Criar um CustomButton - Esperado combinar com o snapshot', () => {
    expect(buttonComponent).toMatchSnapshot();
});

test('Clicar no CustomButton - Esperado chamar a função pressFunc 1 vezes', () => {
    //Press Button
    const button = buttonComponent.root.findByProps({testID: 'touchable_custom_button'}).props;
    act(() => button.onPress())

    expect(pressFunc).toHaveBeenCalledTimes(1);
});