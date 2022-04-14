import {Divider, VStack} from 'native-base';
import React from 'react';
import {SearchBar} from '@components/organisms/SearchBar';

export const SearchScreen = () => {
  return (
    <VStack safeArea divider={<Divider />}>
      <SearchBar />
    </VStack>
  );
};
