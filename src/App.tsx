import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {NavigatorContainer} from './navigators/NavigatorContainer';
// NativeBase 백그라운드 색깔 white로 만들기
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
        <NavigatorContainer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
