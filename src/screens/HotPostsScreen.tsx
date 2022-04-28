import React, {useCallback} from 'react';
import {Box, FlatList} from 'native-base';
import {useQuery} from 'react-query';
import getHotPosts from '@common/api/getHotPostsAPI';
import {TabNavigationProp} from '@common/types/NavigationType';
import {PostItem} from '@common/types/Post';
import {useViewsCounter} from '@common/hooks/useViewsCounter';
import {BigCard} from '@components/organisms/BigCard';
import {CustomSpinner} from '@components/atoms/CustomSpinner';

export const HotPostsScreen = ({navigation}: TabNavigationProp) => {
  const {isLoading, isError, data, refetch, isRefetching, error} = useQuery(
    'hotPost',
    getHotPosts,
  );

  const viewsCountMutation = useViewsCounter();

  const renderItem = useCallback(
    ({item}: PostItem) => (
      <BigCard
        postInfo={item}
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

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <Box>{error}</Box>;
  }

  return (
    <Box marginBottom={'30px'}>
      <FlatList
        data={data.Items}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isRefetching}
        initialNumToRender={2}
        maxToRenderPerBatch={2}
        removeClippedSubviews={true}
        keyExtractor={item => item.PostId}
      />
    </Box>
  );
};
