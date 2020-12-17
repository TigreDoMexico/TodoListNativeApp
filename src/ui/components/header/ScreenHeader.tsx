import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

import { BLUE, DEFAULT_WHITE } from '../../consts/colors';

type componentNameProps = { title: string }

const ScreenHeader = (props: componentNameProps) => {
  return (
  <>
    <StatusBar backgroundColor={BLUE} barStyle="light-content"/>
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLUE,
    height: 55
  },
  title: {
      color: DEFAULT_WHITE,
      fontSize: 25,
      fontWeight: 'bold',
  }
});

export default ScreenHeader;
