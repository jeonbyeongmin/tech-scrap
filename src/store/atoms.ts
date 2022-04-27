import {atom} from 'recoil';
import {Post} from '@common/types/Post';

export const scrapState = atom<Post[]>({
  key: 'scrapState',
  default: [],
});

export const unselectedBlogState = atom<string[]>({
  key: 'unselectedBlogState',
  default: [],
});
