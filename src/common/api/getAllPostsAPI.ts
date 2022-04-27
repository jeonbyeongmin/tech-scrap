import axios from 'axios';

const getAllPosts = async (pageParam = {PostId: '', Type: ''}) => {
  try {
    const response = await axios.get(
      'https://n0yd13qpbc.execute-api.ap-northeast-2.amazonaws.com/dev/post',
      {
        params: {
          postId: pageParam.PostId,
          type: pageParam.Type,
        },
      },
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export default getAllPosts;
