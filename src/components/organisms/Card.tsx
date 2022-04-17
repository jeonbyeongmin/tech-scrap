import React from 'react';
import {Box, Heading, HStack, Pressable, Stack, Text} from 'native-base';
import {siteName} from '@common/utils/siteName';
import {useConvertDate} from '@common/hooks/useConvertDate';
import {Tag} from '@components/atoms/Tag';
import {Views} from '@components/atoms/Views';

interface ICard {
  title: string;
  category: string[];
  site: string;
  timestamp: Date;
  views: number;
  onPress?: () => void;
}

export const Card = ({
  title,
  site,
  views,
  category,
  timestamp,
  onPress,
}: ICard) => {
  const pubDate = useConvertDate(timestamp);

  return (
    <Box alignItems="center" width={'100%'}>
      <Pressable onPress={onPress}>
        {({isPressed}) => {
          return (
            <Box overflow="hidden" bg={isPressed ? 'coolGray.100' : 'white'}>
              <HStack space={2} paddingX={'20px'} paddingY={4}>
                <Stack width={'100%'} space={2}>
                  <HStack
                    space={3}
                    justifyContent="space-between"
                    alignItems="center">
                    <Text fontSize="12" color="violet.500" fontWeight="500">
                      {siteName[site]}
                    </Text>
                    <Text fontSize="12" color="coolGray.600" fontWeight="400">
                      {pubDate}
                    </Text>
                  </HStack>
                  <Heading size="sm" numberOfLines={2} marginBottom={'5px'}>
                    {title}
                  </Heading>
                  <HStack alignItems="center" justifyContent={'space-between'}>
                    <HStack space={1}>
                      {category.map((item, idx) => {
                        return idx === 0 || idx === 1 ? (
                          <Tag key={item} item={item} />
                        ) : null;
                      })}
                    </HStack>
                    <Views views={views} />
                  </HStack>
                </Stack>
              </HStack>
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
};
