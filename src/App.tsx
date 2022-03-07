import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {StackNavigator} from './navigators/StackNavigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
