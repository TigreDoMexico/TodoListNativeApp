import React from 'react';
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