import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';

import TodoListScreen from './src/screens/list/TodoListScreen';

export default function App() {
  return (
    <Provider store={configureStore}>
      <TodoListScreen />
    </Provider>
  );
}