import React from 'react';
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from 'native-base';

interface CardProps {
  id?: string;
  title: string;
  category: string;
  blog: string;
  timeStamp: string;
  cliked: number;
}

export const Card = ({title, blog, timeStamp}: CardProps) => {
  return (
    <Box
      alignItems="center"
      marginLeft="20px"
      marginRight="20px"
      backgroundColor={'white'}
      marginTop={5}>
      <Box
        overflow="hidden"
        borderColor="coolGray.200"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://tech.kakao.com/wp-content/uploads/2022/02/main_fe-802x333.png',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3} backgroundColor={'white'}>
          <Stack space={3}>
            <Heading size="md" ml="-1">
              {title}
            </Heading>
            <Text
              fontSize="12"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {blog}
            </Text>
          </Stack>
          <HStack alignItems="center" justifyContent={'flex-end'}>
            <Text
              fontSize="12"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              {timeStamp}
            </Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
