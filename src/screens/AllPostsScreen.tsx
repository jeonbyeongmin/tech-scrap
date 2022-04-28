import React, {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Box, HStack, Pressable, Spinner, VStack} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import {scrapState, unselectedBlogState} from '@store/atoms';
import {Post, PostItem} from '@common/types/Post';
import {TabNavigationProp} from '@common/types/NavigationType';
import {useViewsCounter} from '@common/hooks/useViewsCounter';
import {useAsyncStorageQuery} from '@common/hooks/useAsyncStorageQuery';
import {useGetPostsQuery} from '@common/hooks/useGetPostsQuery';
import {BookmarkIcon, BookmarkOutlineIcon} from '@components/atoms/Icon';
import {CustomSpinner} from '@components/atoms/CustomSpinner';
import {Card} from '@components/organisms/Card';

export const AllPostsScreen = ({navigation}: TabNavigationProp) => {
  const {
    isLoading,
    isError,
    data,
    hasNextPage,
    refetch,
    isRefetching,
    fetchNextPage,
  } = useGetPostsQuery();

  const viewsCountMutation = useViewsCounter();

  const {data: scrapItems, setData: setScrapItems} = useAsyncStorageQuery<Post>(
    '@scrap_item',
    scrapState,
  );

  const {data: unselectedBlogs} = useAsyncStorageQuery<string>(
    '@unselected_blog',
    unselectedBlogState,
  );

  const handleScrapPost = useCallback(
    async (rowMap: any, item: Post) => {
      if (rowMap[item.PostId]) {
        rowMap[item.PostId].closeRow();
      }

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

  const renderItem = useCallback(
    ({item}: PostItem) => (
      <Card
        title={item.Title}
        site={item.Site}
        timestamp={item.Timestamp}
        category={item.Category}
        views={item.Views}
        imageUrl={item.ImageUrl}
        onPress={() => {
          viewsCountMutation.mutate(item.PostId);
          navigation.navigate('PostDetailScreen', {
            url: item.SiteUrl,
            title: item.Site,
          });
        }}
      />
    ),
    [navigation, viewsCountMutation],
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

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <Box>Error</Box>;
  }

  return (
    <Box height={'100%'}>
      <SwipeListView
        data={data?.pages
          .map(page => page.result)
          .flat()
          .filter(item =>
            unselectedBlogs.find(findItem => findItem === item.Site)
              ? false
              : true,
          )}
        keyExtractor={(item: Post) => item.PostId}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        onRefresh={refetch}
        refreshing={isRefetching}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <Spinner color="black.500" size={'sm'} margin="20px" />
        }
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
