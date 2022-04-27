import axios from 'axios';

const getHotPosts = async () => {
  const response = await axios.get(
    'https://n0yd13qpbc.execute-api.ap-northeast-2.amazonaws.com/dev/post',
  );

  return response.data;
};

export default getHotPosts;
