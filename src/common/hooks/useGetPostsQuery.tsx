import axios from 'axios';
import {useInfiniteQuery} from 'react-query';

export const useGetPostsQuery = () => {
  const fetchPosts = async ({pageParam = {PostId: '', Type: ''}}) => {
    const response = await axios.get(
      'https://wpuj5bfss4.execute-api.ap-northeast-2.amazonaws.com/dev/post/',
      {
        params: {
          postId: pageParam.PostId,
          type: pageParam.Type,
        },
      },
    );
    const result = response.data;

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
