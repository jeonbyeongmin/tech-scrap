import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TopTabNavigator} from '@navigations/TopTabNavigator';
import {TabParamList} from '@common/types/NavigationType';
import {SettingsScreen} from '@screens/SettingsScreen';
import {SearchScreen} from '@screens/SearchScreen';
import {ScrapScreen} from '~/screens/ScrapScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Post"
      screenOptions={() => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          height: 100,
        },
        cardStyle: {
          backgroundColor: '#fff',
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
        name="Scrap"
        component={ScrapScreen}
        options={{
          title: '스크랩',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="bookmarks-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search-outline" color={color} size={size} />
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
