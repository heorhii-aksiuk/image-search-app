import axios from 'axios';
import { API_KEY, API_BASE_URL } from '../constants';

axios.defaults.baseURL = API_BASE_URL;

async function apiService(query: string, perPage: number, page: number) {
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
}

export default apiService;
