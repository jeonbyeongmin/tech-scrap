import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SettingsScreen} from '../screens/SettingsScreen';
import {NotificationsScreen} from '../screens/NotificationsScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          height: 100,
        },
      })}>
      <Tab.Screen
        name="Post"
        component={TopTabNavigator}
        options={{
          headerShown: false,
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
            <Ionicons name="notifications-outline" color={color} size={size} />
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
  );
};
