import React from 'react';
import {Badge, Box, Heading, HStack, Pressable, Stack, Text} from 'native-base';
import {Views} from './Views';

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

export const Card = ({title, blog, timeStamp, onPress}: CardProps) => {
  return (
    <Box
      alignItems="center"
      backgroundColor={'white'}
      paddingX={'20px'}
      paddingY={4}
      width={'100%'}>
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
          _light={{}}>
          <HStack space={2}>
            <Stack width={'100%'} space={2} backgroundColor={'white'}>
              <HStack
                space={3}
                justifyContent="space-between"
                alignItems="center">
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
              <Heading size="sm" numberOfLines={2} marginBottom={'5px'}>
                {title}
              </Heading>
              <HStack alignItems="center" justifyContent={'space-between'}>
                <HStack space={1}>
                  <Badge
                    colorScheme="violet"
                    _text={{
                      fontSize: 10,
                    }}
                    rounded="md">
                    FRONT
                  </Badge>
                  <Badge
                    colorScheme="violet"
                    _text={{
                      fontSize: 10,
                    }}
                    rounded="md">
                    DARK
                  </Badge>
                </HStack>

                <Views views={100} />
              </HStack>
            </Stack>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
};
