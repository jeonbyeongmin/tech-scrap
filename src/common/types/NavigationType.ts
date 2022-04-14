import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  TabNavigator: undefined;
  SelectBlogScreen: undefined;
  PostDetailScreen: {url: string; title: string};
};

export type TabParamList = {
  Post: undefined;
  Search: undefined;
  Notification: undefined;
  Setting: undefined;
};

export type PostNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'TabNavigator'
>;

export type SelectBlogNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'SelectBlogScreen'
>;

export type PostDetailNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'PostDetailScreen'
>;
