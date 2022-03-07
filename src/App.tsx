import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Homescreen} from './screens/HomeScreen';
import {NotificationsScreen} from './screens/NotificationsScreen';
import {SearchScreen} from './screens/SearchScreen';
import {SettingsScreen} from './screens/SettingsScreen';
import {NativeBaseProvider} from 'native-base';
import {Options} from './components/Options';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="Home"
            component={Homescreen}
            options={{
              headerRight: ({}) => <Options />,
              headerTitle: '',
              title: '글',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="newspaper-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: '검색',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="search-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Notification"
            component={NotificationsScreen}
            options={{
              title: '알림',
              tabBarIcon: ({color, size}) => (
                <Ionicons
                  name="notifications-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingsScreen}
            options={{
              title: '설정',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
