import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBar} from '../components/TabBar';
import {AllPostsScreen} from '../screens/AllPostsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <SafeArea />
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="ALL" component={AllPostsScreen} />
      </Tab.Navigator>
    </>
  );
};

const SafeArea = styled(SafeAreaView)`
  background-color: white;
`;
