import React, {useCallback, useEffect} from 'react';
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {siteName} from '@common/utils/siteName';
import {useAsyncStorageQuery} from '@common/hooks/useAsyncStorageQuery';
import {unselectedBlogState} from '@store/atoms';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomSpinner} from '~/components/atoms/CustomSpinner';
import {HeartIcon, HeartOutlineIcon} from '~/components/atoms/Icon';

export const SelectBlogScreen = () => {
  const {data, isLoading, isError, setData} = useAsyncStorageQuery<string>(
    '@unselected_blog',
    unselectedBlogState,
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSelectBlog = useCallback(
    async (item: string) => {
      const newItems = data?.find(element => element === item)
        ? data.filter(element => element !== item)
        : [...data, item];

      setData(newItems);
      await AsyncStorage.setItem('@unselected_blog', JSON.stringify(newItems));
    },
    [data, setData],
  );

  const renderItem = useCallback(
    ({item}) => (
      <Box borderColor="coolGray.200" alignItems="center" width={'100%'}>
        <HStack
          width={'100%'}
          paddingX={'20px'}
          paddingY={4}
          justifyContent="space-between">
          <HStack space={6} alignContent={'center'}>
            <Avatar bg="white" source={item.imageSource} />
            <Text alignSelf="center" fontSize="16px" color="coolGray.800">
              {item.name}
            </Text>
          </HStack>
          <Pressable
            onPress={() => handleSelectBlog(item.site)}
            w="35"
            justifyContent="center"
            _pressed={{
              opacity: 0.5,
            }}>
            <VStack alignItems="center" space={2}>
              {data?.find(element => element === item.site) ? (
                <HeartOutlineIcon />
              ) : (
                <HeartIcon />
              )}
            </VStack>
          </Pressable>
        </HStack>
      </Box>
    ),
    [data, handleSelectBlog],
  );

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (isError) {
    return <Box>Error</Box>;
  }

  return (
    <Box marginBottom={'30px'}>
      <FlatList
        data={Object.values(siteName)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        initialNumToRender={9}
        removeClippedSubviews={true}
        keyExtractor={item => item.name}
      />
    </Box>
  );
};
