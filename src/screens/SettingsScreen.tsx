import React from 'react';
import {Box, HStack, Switch, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  return (
    <Box backgroundColor={'white'} marginY="10px">
      <VStack>
        <HStack marginX="30px" space={4} alignContent="center" paddingY="15px">
          <Ionicons name="mail-outline" size={30} />
          <Text fontSize="18px" alignSelf="center">
            피드백 보내기
          </Text>
        </HStack>
        <HStack marginX="30px" space={4} alignContent="center" paddingY="15px">
          <Ionicons name="list-outline" size={30} />
          <Text fontSize="18px" alignSelf="center">
            키워드 등록
          </Text>
        </HStack>
        <HStack
          marginX="30px"
          paddingY="15px"
          alignContent="center"
          justifyContent="space-between">
          <HStack space={4}>
            <Ionicons name="moon-outline" size={30} />
            <Text fontSize="18px" alignSelf="center">
              다크모드
            </Text>
          </HStack>
          <Switch alignSelf="center" />
        </HStack>
      </VStack>
    </Box>
  );
};
