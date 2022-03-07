import {Box, Button, HStack, Image} from 'native-base';
import React from 'react';
import logo from '../images/scrap.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  onPress: () => void;
}

export const Header = ({onPress}: HeaderProps) => {
  return (
    <Box>
      <HStack
        alignContent="center"
        justifyContent="space-between"
        marginX="20px">
        <Image
          source={logo}
          alt="image"
          resizeMode="contain"
          width="16"
          height="auto"
        />
        <Button onPress={onPress} variant="unstyled">
          <Ionicons name="options-outline" size={25} />
        </Button>
      </HStack>
    </Box>
  );
};
