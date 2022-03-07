import React from 'react';
import {Box, FlatList} from 'native-base';
import {Card} from '../components/Card';
import {data} from '../data';

export const TechScreen = () => {
  return (
    <Box background={'white'}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            title={item.title}
            blog={item.blog}
            timeStamp={item.timeStamp}
            category={item.category}
            cliked={item.cliked}
          />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};
