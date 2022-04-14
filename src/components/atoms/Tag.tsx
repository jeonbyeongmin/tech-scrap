import {Badge} from 'native-base';
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
      rounded="md">
      {item}
    </Badge>
  );
};
