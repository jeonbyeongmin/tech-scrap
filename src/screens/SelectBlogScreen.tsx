import React, {useCallback} from 'react';
import {Box, FlatList, HStack, Switch, Text} from 'native-base';
import {siteName} from '@common/utils/siteName';

export const SelectBlogScreen = () => {
  const renderItem = useCallback(
    ({item}) => (
      <Box borderColor="coolGray.200" alignItems="center" width={'100%'}>
        <HStack
          width={'100%'}
          paddingX={'20px'}
          paddingY={4}
          justifyContent="space-between">
          <Text alignSelf="center" fontSize="16px" color="coolGray.800">
            {item}
          </Text>
          <Switch
            defaultIsChecked
            size="sm"
            onTrackColor="indigo.200"
            onThumbColor="indigo.500"
            offThumbColor="indigo.50"
            alignSelf="center"
          />
        </HStack>
      </Box>
    ),
    [],
  );

  return (
    <Box marginBottom={'30px'}>
      <FlatList
        data={Object.values(siteName)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        initialNumToRender={15}
        keyExtractor={item => item}
      />
    </Box>
  );
};
