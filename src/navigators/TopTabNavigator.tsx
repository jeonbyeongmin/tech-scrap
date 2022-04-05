import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TechScreen} from '../screens/TechScreen';
import {RecruitPostScreen} from '../screens/RecruitPostScreen';
import {TabBar} from '../components/TabBar';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <SafeArea />
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="HOT" component={TechScreen} />
        <Tab.Screen name="ALL" component={RecruitPostScreen} />
      </Tab.Navigator>
    </>
  );
};

const SafeArea = styled(SafeAreaView)`
  background-color: white;
`;
