import axios from 'axios';

const updateViews = async (postId: string) => {
  try {
    const response = await axios.patch(
      'https://n0yd13qpbc.execute-api.ap-northeast-2.amazonaws.com/dev/post/views',
      null,
      {
        params: {
          postId,
        },
      },
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export default updateViews;
