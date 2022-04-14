import {Box, HStack, Image} from 'native-base';
import React from 'react';
import logo from '@images/scrap.png';
import {OptionIcon} from '@components/atoms/Icon';

interface IHeader {
  onPress: () => void;
}

export const Header = ({onPress}: IHeader) => {
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
          width="1/4"
          height="auto"
        />
        <OptionIcon onPress={onPress} />
      </HStack>
    </Box>
  );
};
