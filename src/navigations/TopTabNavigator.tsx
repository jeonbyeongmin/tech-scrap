import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBar} from '@components/organisms/TabBar';
import {AllPostsScreen} from '@screens/AllPostsScreen';
import {HotPostsScreen} from '@screens/HotPostsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <SafeArea />
      <Tab.Navigator
        screenOptions={() => ({
          swipeEnabled: false,
          lazy: true,
        })}
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="ALL" component={AllPostsScreen} />
        <Tab.Screen name="HOT" component={HotPostsScreen} />
      </Tab.Navigator>
    </>
  );
};

const SafeArea = styled(SafeAreaView)`
  background-color: white;
`;
