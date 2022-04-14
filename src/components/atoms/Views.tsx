import React from 'react';
import {HStack, Text} from 'native-base';
import {ViewsIcon} from '@components/atoms/Icon';

interface IViews {
  views: number;
}

export const Views = ({views}: IViews) => {
  return (
    <HStack space={1} alignItems="center">
      <ViewsIcon />
      <Text fontSize="12" color="coolGray.600">
        {views}
      </Text>
    </HStack>
  );
};
