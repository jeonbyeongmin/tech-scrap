import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BackIcon} from '@components/atoms/Icon';
import {TabNavigator} from '@navigations/TabNavigator';
import {SelectBlogScreen} from '@screens/SelectBlogScreen';
import {PostDetailScreen} from '@screens/PostDetailScreen';
import {RootStackParamList} from '@common/types/NavigationType';

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={() => ({
        headerStyle: {
          height: 100,
        },
        cardStyle: {
          backgroundColor: '#fff',
        },
      })}>
      <Stack.Screen
        name="TabNavigator"
        options={{headerShown: false}}
        component={TabNavigator}
      />
      <Stack.Screen
        name="SelectBlogScreen"
        component={SelectBlogScreen}
        options={{
          title: '기술 블로그 선택',
          headerLeft: props => <BackIcon onPress={props.onPress} />,
        }}
      />
      <Stack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        initialParams={{url: '', title: ''}}
        options={{
          headerLeft: props => <BackIcon onPress={props.onPress} />,
        }}
      />
    </Stack.Navigator>
  );
};
