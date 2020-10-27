import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'react-native';
import { content } from './src/navigation/AppNavigation';

import { store } from './src/redux/store';

export const App = () => {
  return <Provider store={store}>{content}</Provider>;
};

export default App;
