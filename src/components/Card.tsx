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
      backgroundColor={'white'}
      marginTop={5}
      marginX="20px">
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
        <Stack p="3" space={3} backgroundColor={'white'}>
          <Heading size="md">{title}</Heading>
          <HStack alignItems="center" justifyContent={'space-between'}>
            <Text
              fontSize="12"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500">
              {blog}
            </Text>
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
