declare module '*.png' {
  import {ImageSourcePropType, ImageURISource} from 'react-native';

  const value: ImageSourcePropType & ImageURISource;
  export default value;
}

declare module '*.jpg' {
  import {ImageSourcePropType, ImageURISource} from 'react-native';

  const value: ImageSourcePropType & ImageURISource;
  export default value;
}
