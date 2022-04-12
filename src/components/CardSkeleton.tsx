import {Center, Skeleton, VStack} from 'native-base';
import React from 'react';

// interface CardSkeletonProps {
//   id?: string;
//   title: string;
//   category: string;
//   blog: string;
//   timeStamp: string;
//   views: number;
//   onPress?: () => void;
// }

export const CardSkeleton = () => {
  return (
    <Center w="100%">
      <VStack
        w="100%"
        maxW="400"
        space={8}
        overflow="hidden"
        marginY={4}
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}>
        <Skeleton.Text px="4" />
      </VStack>
    </Center>
  );
};
