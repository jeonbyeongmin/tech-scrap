import React from 'react';
import {useColorScheme} from 'react-native';
import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme,
} from '@react-navigation/native';
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
  const scheme = useColorScheme();
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
