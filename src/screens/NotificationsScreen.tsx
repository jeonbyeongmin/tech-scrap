import React from 'react';
import {VStack, Box, Divider} from 'native-base';

export const NotificationsScreen = () => {
  return (
    <Box borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          키워드 알림
        </Box>
        <Box px="4">
          유저가 키워드를 등록하고, 키워드가 제목에 포함된 게시글이 올라왔을 때
          유저에게 알림을 보내고 알림 탭에도 넣어둠. 그러면 알림은 디비를 어케
          하지? 이 부분을 생각해봐야 할듯
        </Box>
      </VStack>
    </Box>
  );
};
