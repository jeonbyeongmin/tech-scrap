import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const SelectBlogScreen = () => {
  return (
    <Container>
      <MyText>select!</MyText>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const MyText = styled.Text``;
