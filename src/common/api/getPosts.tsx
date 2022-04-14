import axios from 'axios';

axios.defaults.baseURL =
  'https://obmstxuti1.execute-api.ap-northeast-2.amazonaws.com/dev';

export const getPosts = async () => {
  try {
    const response = await axios.get('/post');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
