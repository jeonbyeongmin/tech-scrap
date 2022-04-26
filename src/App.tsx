import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {StackNavigator} from './navigations/StackNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

// extend the theme
const customTheme = extendTheme({
  useSystemColorMode: true,
  initialColorMode: 'light',
});

const queryClient = new QueryClient();

const App = () => {
  const scheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
          <StackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
