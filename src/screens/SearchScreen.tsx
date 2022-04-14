import {Divider, VStack} from 'native-base';
import React from 'react';
import {SearchBar} from '../components/SearchBar';

export const SearchScreen = () => {
  return (
    <VStack safeArea divider={<Divider />}>
      <SearchBar />

      {/* // TODO: data 에 검색 결과 넣기 */}
      {/* <FlatList
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
      /> */}
    </VStack>
  );
};
