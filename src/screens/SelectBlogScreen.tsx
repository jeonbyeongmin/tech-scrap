import {Avatar, Box, FlatList, HStack, Switch, Text} from 'native-base';
import React from 'react';
import {blog} from '../data';

export const SelectBlogScreen = () => {
  return (
    <Box paddingBottom="30px">
      <FlatList
        data={blog}
        renderItem={({item}) => (
          <Box
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            paddingX="40px"
            paddingY="10px">
            <HStack space={3} justifyContent="space-between">
              <HStack alignContent="center" justifyContent="center" space={3}>
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <Text
                  alignSelf="center"
                  fontSize="16px"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800">
                  {item.name}
                </Text>
              </HStack>
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
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};
