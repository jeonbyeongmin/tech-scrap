import {HStack, Spinner} from 'native-base';
import React from 'react';

export const CustomSpinner = () => {
  return (
    <HStack
      position={'absolute'}
      left={0}
      right={0}
      top={0}
      bottom={20}
      alignContent={'center'}
      justifyContent="center">
      <Spinner color="black.500" size={'lg'} />
    </HStack>
  );
};
