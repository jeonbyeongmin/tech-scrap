import React from 'react';
import {Badge, Box, Heading, HStack, Pressable, Stack, Text} from 'native-base';
import {Views} from './Views';
import {siteName} from '../common/utils/siteName';
import {useConvertDate} from '../common/hooks/useConvertDate';

interface CardProps {
  id?: string;
  title: string;
  category: string[];
  site: string;
  timestamp: string;
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
}: CardProps) => {
  const pubDate = useConvertDate(timestamp);

  return (
    <Box alignItems="center" paddingX={'20px'} paddingY={4} width={'100%'}>
      <Pressable onPress={onPress}>
        <Box overflow="hidden" borderColor="coolGray.200">
          <HStack space={2}>
            <Stack width={'100%'} space={2} backgroundColor={'white'}>
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
                  {category.map((item, index) => {
                    return index === 0 || index === 1 ? (
                      <Badge
                        key={index}
                        colorScheme="violet"
                        _text={{
                          fontSize: 10,
                        }}
                        rounded="md">
                        {item}
                      </Badge>
                    ) : null;
                  })}
                </HStack>

                <Views views={views} />
              </HStack>
            </Stack>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
};
