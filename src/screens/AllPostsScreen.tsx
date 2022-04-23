import React, {useCallback} from 'react';
import {Box, FlatList, Spinner} from 'native-base';
import {Card} from '@components/organisms/Card';
import {PostNavigationProp} from '@common/types/NavigationType';
import {useGetPostsQuery} from '@common/hooks/useGetPostsQuery';
import {Post, PostItem} from '@common/types/Post';
import {CustomSpinner} from '@components/atoms/CustomSpinner';

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

  const keyExtractor = useCallback((item: Post) => item.PostId, []);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <Box>Error</Box>;
  }

  return (
    <Box>
      <FlatList
        data={data?.pages.map(page => page.result).flat()}
        renderItem={renderItem}
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
      />
    </Box>
  );
};
