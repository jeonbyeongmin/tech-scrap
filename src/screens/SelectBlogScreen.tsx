import React, {useCallback} from 'react';
import {Avatar, Box, FlatList, HStack, Switch, Text} from 'native-base';
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
          <HStack space={6} alignContent={'center'}>
            <Avatar bg="white" source={item.imageSource} />
            <Text alignSelf="center" fontSize="16px" color="coolGray.800">
              {item.name}
            </Text>
          </HStack>

          <Switch
            defaultIsChecked
            size="md"
            onTrackColor="violet.200"
            onThumbColor="violet.500"
            offThumbColor="violet.50"
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
        keyExtractor={item => item.name}
      />
    </Box>
  );
};
