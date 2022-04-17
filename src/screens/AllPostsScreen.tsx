import React, {useCallback} from 'react';
import {Box, FlatList, HStack, Spinner} from 'native-base';
import {Card} from '@components/organisms/Card';
import {PostNavigationProp} from '@common/types/NavigationType';
import {useGetPostsQuery} from '@common/hooks/useGetPostsQuery';

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
    ({item}) => (
      <Card
        title={item.Title}
        site={item.Site}
        timestamp={item.Timestamp}
        category={item.Category}
        views={item.Views}
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

  const keyExtractor = useCallback(item => item.PostId, []);

  if (isLoading) {
    return (
      <HStack
        position={'absolute'}
        left={0}
        right={0}
        top={0}
        bottom={20}
        alignContent={'center'}
        justifyContent="center">
        <Spinner color="black.500" size={'lg'} />
      </HStack>
    );
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
        windowSize={12}
        onRefresh={refetch}
        refreshing={isRefetching}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.01}
        ListFooterComponent={
          <Spinner color="black.500" size={'sm'} margin="20px" />
        }
      />
    </Box>
  );
};
