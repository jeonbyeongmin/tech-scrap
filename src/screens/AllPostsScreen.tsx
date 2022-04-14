import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {Box, FlatList, Spinner} from 'native-base';
import {Card} from '@components/organisms/Card';

export const AllPostsScreen = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [nextPost, setNextPost] = useState({});

  async function getNextPosts() {
    try {
      const response = await axios.get(
        'https://wpuj5bfss4.execute-api.ap-northeast-2.amazonaws.com/dev/post/',
        {
          params: {
            postId: nextPost.PostId,
            type: nextPost.Type,
          },
        },
      );

      setData([...data, ...response.data.Items]);
      setNextPost(response.data.LastEvaluatedKey);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getPosts() {
    try {
      const response = await axios.get(
        'https://wpuj5bfss4.execute-api.ap-northeast-2.amazonaws.com/dev/post/',
      );

      setData(response.data.Items);
      setNextPost(response.data.LastEvaluatedKey);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const getRefreshData = async () => {
    setRefreshing(true);
    await getPosts();
    setRefreshing(false);
  };

  useEffect(() => {
    async function fetchPostData() {
      await getPosts();
    }

    fetchPostData();
  }, []);

  const onEndReached = () => {
    if (!isLoading) {
      getNextPosts();
    }
  };

  const onRefresh = async () => {
    if (!refreshing) {
      getRefreshData();
    }
  };

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

  return (
    <Box>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        disableVirtualization={false}
        removeClippedSubviews={true}
        windowSize={12}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <Spinner color="black.500" size={'sm'} margin="20px" />
        }
      />
    </Box>
  );
};
