import axios from 'axios';
import { API_KEY } from '../constants';

axios.defaults.baseURL = 'https://pixabay.com/api';

const apiService = async (query: string, perPage: number, page: number) => {
  const params = {
    q: query,
    page: page.toString(),
    per_page: perPage.toString(),
    image_type: 'photo',
    orientation: 'horizontal',
    key: API_KEY,
  };
  const searchParams = new URLSearchParams(params);

  const requestString = '/?' + searchParams;
  const response = await axios.get(requestString);
  return response;
};

export default apiService;
