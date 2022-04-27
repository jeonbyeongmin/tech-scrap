import React from 'react';
import {Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IIcon {
  onPress: (() => void) | undefined;
}

export const BackIcon = ({onPress}: IIcon) => {
  return (
    <Button variant="unstyled" onPress={onPress}>
      <Ionicons name="chevron-back-outline" size={25} />
    </Button>
  );
};

export const OptionIcon = ({onPress}: IIcon) => {
  return (
    <Button onPress={onPress} variant="unstyled">
      <Ionicons name="options-outline" size={25} />
    </Button>
  );
};

export const SearchIcon = () => {
  return <Ionicons name="search-outline" size={25} />;
};

export const ViewsIcon = () => {
  return <Ionicons name="eye" size={14} />;
};

export const BookmarkOutlineIcon = () => {
  return <Ionicons name="bookmark-outline" size={20} />;
};

export const BookmarkIcon = () => {
  return <Ionicons name="bookmark" size={20} />;
};

export const HeartOutlineIcon = () => {
  return <Ionicons name="heart-outline" size={25} />;
};

export const HeartIcon = () => {
  return <Ionicons name="heart" color={'#eb0626'} size={25} />;
};
