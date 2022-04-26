import React, {useEffect} from 'react';
import {Box} from 'native-base';
import {useAsyncStorageQuery} from '~/common/hooks/useAsyncStorageQuery';
import {Post} from '~/common/types/Post';

export const ScrapScreen = () => {
  const {data, isLoading, isError, error} =
    useAsyncStorageQuery<Post>('@scrap_item');

  useEffect(() => {
    if (!isLoading) {
      console.log(isLoading, data);
    }
  }, [data, isLoading]);

  return <Box></Box>;
};
