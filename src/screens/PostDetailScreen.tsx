import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {siteName} from '@common/utils/siteName';
import {PostDetailNavigationProp} from '@common/types/NavigationType';
import {CustomSpinner} from '@components/atoms/CustomSpinner';

export const PostDetailScreen = ({
  route,
  navigation,
}: PostDetailNavigationProp) => {
  const {url, title} = route.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: siteName[title],
    });
  }, [navigation, title]);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <WebView onLoad={handleOnLoad} source={{uri: url}} />
      {isLoading && <CustomSpinner />}
    </>
  );
};
