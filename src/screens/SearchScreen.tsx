import {Divider, FlatList, VStack} from 'native-base';
import React, {useCallback} from 'react';
import {Card} from '../components/Card';
import {SearchBar} from '../components/SearchBar';
import {data} from '../data';

const ITEM_HEIGHT = 93;

export const SearchScreen = ({navigation}: any) => {
  const renderItem = useCallback(
    ({item}) => (
      //  TODO: Card 컴포넌트 말고 다른 디자인?
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
    <VStack safeArea divider={<Divider />}>
      <SearchBar />

      {/* // TODO: data 에 검색 결과 넣기 */}
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
    </VStack>
  );
};
