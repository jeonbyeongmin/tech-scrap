import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {StackNavigator} from './navigators/StackNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MyTheme}>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
