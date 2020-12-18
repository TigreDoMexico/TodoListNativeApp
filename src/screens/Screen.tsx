import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ScreenHeader from '../ui/components/header/ScreenHeader';

import { DEFAULT_WHITE } from '../ui/consts/colors';

// type ContainsChildren<T = {}> =
//     T & { children?: React.ReactNode}

type ScreenProps = {
    pageTitle: string
    children: React.ReactNode
}

const Screen = ({pageTitle, children}: ScreenProps) => {
    return(
        <View style={styles.container}>
            <ScreenHeader title={pageTitle}/>
            <View style={{flex: 1}}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: DEFAULT_WHITE,
    },
});

export default Screen;