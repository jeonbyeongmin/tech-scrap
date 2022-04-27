import React, {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Box, HStack, Pressable, VStack} from 'native-base';
import {scrapState} from '@store/atoms';
import {useAsyncStorageQuery} from '@common/hooks/useAsyncStorageQuery';
import {TabNavigationProp} from '@common/types/NavigationType';
import {Post, PostItem} from '@common/types/Post';
import {BookmarkIcon} from '@components/atoms/Icon';
import {CustomSpinner} from '@components/atoms/CustomSpinner';
import {Card} from '@components/organisms/Card';

export const ScrapScreen = ({navigation}: TabNavigationProp) => {
  const {data, isLoading, isError, setData} = useAsyncStorageQuery<Post>(
    '@scrap_item',
    scrapState,
  );

  const handleScrapPost = useCallback(
    async (rowMap: any, item: Post) => {
      if (rowMap[item.PostId]) {
        rowMap[item.PostId].closeRow();
      }

      const newScrapItems = data?.find(
        element => element.PostId === item.PostId,
      )
        ? data.filter(element => element.PostId !== item.PostId)
        : [...data, item];

      setData(newScrapItems);
      await AsyncStorage.setItem('@scrap_item', JSON.stringify(newScrapItems));
    },
    [data, setData],
  );

  const renderItem = useCallback(
    ({item}: PostItem) => (
      <Card
        title={item.Title}
        site={item.Site}
        timestamp={item.Timestamp}
        category={item.Category}
        views={item.Views}
        imageUrl={item.ImageUrl}
        onPress={() =>
          navigation.navigate('PostDetailScreen', {
            url: item.SiteUrl,
            title: item.Site,
          })
        }
      />
    ),
    [navigation],
  );

  const renderHiddenItem = useCallback(
    ({item}: PostItem, rowMap: any) => (
      <HStack flex="1" pl="2">
        <Pressable
          onPress={() => handleScrapPost(rowMap, item)}
          w="75"
          ml="auto"
          justifyContent="center"
          _pressed={{
            opacity: 0.5,
          }}>
          <VStack alignItems="center" space={2}>
            <BookmarkIcon />
          </VStack>
        </Pressable>
      </HStack>
    ),
    [handleScrapPost],
  );

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <Box>Error</Box>;
  }

  return (
    <Box height={'100%'}>
      <SwipeListView
        data={[...data].reverse()}
        keyExtractor={(item: Post) => item.PostId}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        maxToRenderPerBatch={8}
        windowSize={15}
        rightOpenValue={-80}
        removeClippedSubviews={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};
