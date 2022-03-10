import React, {useCallback} from 'react';
import {Box, FlatList} from 'native-base';
import {Card} from '../components/Card';
import {data} from '../data';

const ITEM_HEIGHT = 93;

export const TechScreen = ({navigation}: any) => {
  const renderItem = useCallback(
    ({item}) => (
      <Card
        title={item.title}
        blog={item.blog}
        timeStamp={item.timeStamp}
        category={item.category}
        cliked={item.cliked}
        image={item.image}
        onPress={() =>
          navigation.navigate('PostDetailScreen', {
            url: item.url,
            title: item.blog,
          })
        }
      />
    ),
    [navigation],
  );

  const getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <Box>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        removeClippedSubviews={true}
        windowSize={12}
      />
    </Box>
  );
};
