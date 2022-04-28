import axios from 'axios';

const getHotPosts = async () => {
  try {
    const response = await axios.get(
      'https://n0yd13qpbc.execute-api.ap-northeast-2.amazonaws.com/dev/hotPost',
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export default getHotPosts;
