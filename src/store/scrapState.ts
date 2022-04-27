import {atom} from 'recoil';
import {Post} from '@common/types/Post';

export const scrapState = atom<Post[]>({
  key: 'scrapState',
  default: [],
});
