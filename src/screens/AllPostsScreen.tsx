import React, {useCallback, useEffect, useState} from 'react';
import {Box, HStack, Pressable, Spinner, VStack} from 'native-base';
import {Card} from '@components/organisms/Card';
import {PostNavigationProp} from '@common/types/NavigationType';
import {useGetPostsQuery} from '@common/hooks/useGetPostsQuery';
import {Post, PostItem} from '@common/types/Post';
import {CustomSpinner} from '@components/atoms/CustomSpinner';
import {BookmarkIcon, BookmarkOutlineIcon} from '@components/atoms/Icon';
import {SwipeListView} from 'react-native-swipe-list-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const [scrapItem, setScrapItem] = useState<Post[]>();

  useEffect(() => {
    async function fetchScrapItem() {
      try {
        const jsonValue = await AsyncStorage.getItem('@scrap_item');
        const value = jsonValue != null ? JSON.parse(jsonValue) : null;
        setScrapItem(value);
      } catch (e) {
        console.log(e);
      }
    }

    fetchScrapItem();
  }, []);

  const handleClickBookmark = async (rowMap: any, item: Post) => {
    if (rowMap[item.PostId]) {
      rowMap[item.PostId].closeRow();
    }

    if (scrapItem) {
      // 배열에 이미 존재하면 찾아서 없애고, 없다면 넣기
      const newScrapItems = scrapItem?.find(
        element => element.PostId === item.PostId,
      )
        ? scrapItem.filter(element => element.PostId !== item.PostId)
        : [...scrapItem, item];

      setScrapItem(newScrapItems);
      await AsyncStorage.setItem('@scrap_item', JSON.stringify(newScrapItems));
    } else {
      const jsonValue = JSON.stringify([item]);
      await AsyncStorage.setItem('@scrap_item', jsonValue);
    }
  };

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

  const renderHiddenItem = ({item}: PostItem, rowMap: any) => (
    <HStack flex="1" pl="2">
      <Pressable
        onPress={() => handleClickBookmark(rowMap, item)}
        w="75"
        ml="auto"
        justifyContent="center"
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          {scrapItem?.find(element => element.PostId === item.PostId) ? (
            <BookmarkIcon />
          ) : (
            <BookmarkOutlineIcon />
          )}
        </VStack>
      </Pressable>
    </HStack>
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
