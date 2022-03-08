import React from 'react';
import {Box, Heading, HStack, Image, Pressable, Stack, Text} from 'native-base';

interface CardProps {
  id?: string;
  title: string;
  category: string;
  blog: string;
  timeStamp: string;
  cliked: number;
  image: string;
  onPress?: () => void;
}

export const Card = ({title, blog, image, timeStamp, onPress}: CardProps) => {
  return (
    <Box
      alignItems="center"
      backgroundColor={'white'}
      marginTop={5}
      marginX="20px"
      height={'90px'}>
      <Pressable onPress={onPress}>
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
          <HStack>
            <Image
              w="2/6"
              source={{
                uri: image,
              }}
              alt="image"
            />
            <Stack
              p="3"
              w="4/6"
              space={2}
              paddingLeft={'20px'}
              backgroundColor={'white'}>
              <Heading size="sm" numberOfLines={2}>
                {title}
              </Heading>
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
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
};
