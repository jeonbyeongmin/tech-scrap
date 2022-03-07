import React from 'react';
import {Box, Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface BackIconProps {
  onPress: (() => void) | undefined;
}

export const BackIcon = ({onPress}: BackIconProps) => {
  return (
    <Box marginX={5}>
      <Button variant="unstyled" onPress={onPress}>
        <Ionicons name="chevron-back-outline" size={25} />
      </Button>
    </Box>
  );
};
