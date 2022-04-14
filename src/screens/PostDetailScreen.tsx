import React, {useEffect, useState} from 'react';
import {HStack, Spinner} from 'native-base';
import {WebView} from 'react-native-webview';
import {siteName} from '../common/utils/siteName';
import {PostDetailNavigationProp} from '~/common/types/NavigationType';

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
      <WebView onLoad={() => handleOnLoad()} source={{uri: url}} />
      {isLoading && (
        <HStack
          position={'absolute'}
          left={0}
          right={0}
          top={0}
          bottom={20}
          alignContent={'center'}
          justifyContent="center">
          <Spinner color="black.500" size={'lg'} />
        </HStack>
      )}
    </>
  );
};
