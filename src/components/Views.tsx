import React from 'react';
import {HStack, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ViewsProps {
  views: number;
}

export const Views = ({views}: ViewsProps) => {
  return (
    <HStack space={1} alignItems="center">
      <Ionicons name="eye" size={14} />
      <Text fontSize="12" color="coolGray.600">
        {views}
      </Text>
    </HStack>
  );
};
