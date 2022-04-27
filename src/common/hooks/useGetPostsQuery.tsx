import {useInfiniteQuery} from 'react-query';
import getAllPosts from '@common/api/getAllPostsAPI';

export const useGetPostsQuery = () => {
  const fetchPosts = async ({pageParam = {PostId: '', Type: ''}}) => {
    const result = await getAllPosts(pageParam);

    return {
      result: result.Items,
      nextPage: result.LastEvaluatedKey,
      isLast: result.LastEvaluatedKey ? false : true,
    };
  };

  const query = useInfiniteQuery('posts', fetchPosts, {
    getNextPageParam: (lastPage, _) => {
      if (!lastPage.isLast) {
        return lastPage.nextPage;
      }
      return undefined;
    },
  });

  return query;
};
