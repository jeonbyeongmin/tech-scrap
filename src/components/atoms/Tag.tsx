import {Badge, Text} from 'native-base';
import React from 'react';

interface ITag {
  item: string;
}

export const Tag = ({item}: ITag) => {
  return (
    <Badge
      colorScheme="violet"
      _text={{
        fontSize: 10,
      }}
      rounded="md"
      maxWidth={'80px'}
      textOverflow="revert">
      <Text numberOfLines={1} color="violet.600" fontSize={'10px'}>
        {item}
      </Text>
    </Badge>
  );
};
