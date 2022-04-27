import React, {useCallback} from 'react';
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  Pressable,
  Stack,
  Text,
  VStack,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {scrapState} from '@store/atoms';
import defaultImg from '@images/defaultImg.png';
import {siteName} from '@common/utils/siteName';
import {Post} from '@common/types/Post';
import {useAsyncStorageQuery} from '@common/hooks/useAsyncStorageQuery';
import {Tag} from '@components/atoms/Tag';
import {Views} from '@components/atoms/Views';
import {BookmarkIcon, BookmarkOutlineIcon} from '@components/atoms/Icon';

interface IBigCard {
  postInfo: Post;
  title: string;
  category: string[];
  site: string;
  timestamp: Date;
  views: number;
  imageUrl: string;
  onPress?: () => void;
}

export const BigCard = ({
  postInfo,
  title,
  site,
  views,
  category,
  imageUrl,
  onPress,
}: IBigCard) => {
  const {data: scrapItems, setData: setScrapItems} = useAsyncStorageQuery<Post>(
    '@scrap_item',
    scrapState,
  );

  const handleScrapPost = useCallback(
    async (item: Post) => {
      const newScrapItems = scrapItems?.find(
        element => element.PostId === item.PostId,
      )
        ? scrapItems.filter(element => element.PostId !== item.PostId)
        : [...scrapItems, item];

      setScrapItems(newScrapItems);
      await AsyncStorage.setItem('@scrap_item', JSON.stringify(newScrapItems));
    },
    [scrapItems, setScrapItems],
  );

  return (
    <Box alignItems="center" width={'100%'} marginBottom={'5'}>
      <Pressable onPress={onPress}>
        <Box overflow="hidden">
          <VStack space={4} paddingX={'20px'} paddingY={4}>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{uri: imageUrl}}
                alt="image"
                defaultSource={defaultImg}
                resizeMode="cover"
                borderTopRadius={'lg'}
              />
            </AspectRatio>
            <Stack space={3} paddingX={'3'}>
              <HStack
                space={3}
                justifyContent="space-between"
                alignItems="center">
                <Text fontSize="12" color="violet.500" fontWeight="500">
                  {siteName[site].name}
                </Text>

                <Views views={views} />
              </HStack>
              <HStack>
                <Heading size="sm" numberOfLines={2} marginBottom={'5px'}>
                  {title}
                </Heading>
              </HStack>
              <HStack alignItems="center" justifyContent={'space-between'}>
                <HStack space={1}>
                  {category.map((item, idx) => {
                    return idx < 3 ? <Tag key={item} item={item} /> : null;
                  })}
                </HStack>
                <Pressable onPress={() => handleScrapPost(postInfo)}>
                  {scrapItems?.find(
                    element => element.PostId === postInfo.PostId,
                  ) ? (
                    <BookmarkIcon />
                  ) : (
                    <BookmarkOutlineIcon />
                  )}
                </Pressable>
              </HStack>
            </Stack>
          </VStack>
        </Box>
      </Pressable>
    </Box>
  );
};
