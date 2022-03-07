import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Header} from './Header';
import {Animated} from 'react-native';
import {Tab} from './Tab';

interface Route {
  key: string;
  name: string;
  params?: object | undefined;
}

export const TabBar = ({state, navigation}: MaterialTopTabBarProps) => {
  const [translateValue] = useState(new Animated.Value(0));
  const [width, setWidth] = useState(0);
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    Animated.spring(translateValue, {
      toValue,
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
      useNativeDriver: true,
    }).start();
  }, [state, translateValue, toValue]);

  return (
    <Container>
      <Header onPress={() => navigation.navigate('SelectBlogScreen')} />
      <TabWrapper>
        {state.routes.map((route: Route, index: number) => {
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <Tab
              isFocused={isFocused}
              key={`tab_${index}`}
              label={label}
              onPress={onPress}
              setToValue={setToValue}
              setWidth={setWidth}
            />
          );
        })}
      </TabWrapper>
      <BottomLine
        as={Animated.View}
        style={{
          transform: [{translateX: translateValue}],
          width,
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  padding-top: 10px;
`;

const TabWrapper = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-left: 4px;
`;

const BottomLine = styled.View`
  background-color: black;
  height: 2px;
  width: 100%;
`;
