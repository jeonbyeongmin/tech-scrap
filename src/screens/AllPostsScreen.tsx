import React, {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Box, HStack, Pressable, Spinner, VStack} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Post, PostItem} from '@common/types/Post';
import {PostNavigationProp} from '@common/types/NavigationType';
import {useAsyncStorageQuery} from '~/common/hooks/useAsyncStorageQuery';
import {useGetPostsQuery} from '@common/hooks/useGetPostsQuery';
import {BookmarkIcon, BookmarkOutlineIcon} from '@components/atoms/Icon';
import {CustomSpinner} from '@components/atoms/CustomSpinner';
import {Card} from '@components/organisms/Card';

export const AllPostsScreen = ({navigation}: PostNavigationProp) => {
  const {
    isLoading,
    isError,
    data,
    hasNextPage,
    refetch,
    isRefetching,
    fetchNextPage,
  } = useGetPostsQuery();

  const {data: scrapItems, setData: setScrapItems} =
    useAsyncStorageQuery<Post>('@scrap_item');

  const handleScrapPost = useCallback(
    async (rowMap: any, item: Post) => {
      if (rowMap[item.PostId]) {
        rowMap[item.PostId].closeRow();
      }

      if (scrapItems) {
        const newScrapItems = scrapItems?.find(
          element => element.PostId === item.PostId,
        )
          ? scrapItems.filter(element => element.PostId !== item.PostId)
          : [...scrapItems, item];

        setScrapItems(newScrapItems);
        await AsyncStorage.setItem(
          '@scrap_item',
          JSON.stringify(newScrapItems),
        );
      } else {
        const jsonValue = JSON.stringify([item]);
        await AsyncStorage.setItem('@scrap_item', jsonValue);
      }
    },
    [scrapItems, setScrapItems],
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
            {scrapItems?.find(element => element.PostId === item.PostId) ? (
              <BookmarkIcon />
            ) : (
              <BookmarkOutlineIcon />
            )}
          </VStack>
        </Pressable>
      </HStack>
    ),
    [handleScrapPost, scrapItems],
  );

  const keyExtractor = useCallback((item: Post) => item.PostId, []);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <Box>Error</Box>;
  }

  return (
    <Box>
      <SwipeListView
        data={data?.pages.map(page => page.result).flat()}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        disableVirtualization={false}
        removeClippedSubviews={true}
        windowSize={15}
        onRefresh={refetch}
        refreshing={isRefetching}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.1}
        maxToRenderPerBatch={8}
        ListFooterComponent={
          <Spinner color="black.500" size={'sm'} margin="20px" />
        }
        rightOpenValue={-80}
      />
    </Box>
  );
};
