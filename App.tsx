import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './store';

import TodoListScreen from './src/screens/list/TodoListScreen';

export default function App() {
  return (
    <Provider store={Store}>
      <TodoListScreen />
    </Provider>
  );
}