import {useMutation} from 'react-query';
import updateViews from '@common/api/updateViewsAPI';

export const useViewsCounter = () => {
  const viewsCountMutation = useMutation((postId: string) =>
    updateViews(postId),
  );

  return viewsCountMutation;
};
