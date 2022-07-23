import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

const apiService = async (query, perPage, page) => {
  const searchParams = new URLSearchParams({
    q: query,
    page: page,
    per_page: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
    key: API_KEY,
  });

  const requestString = '/?' + searchParams;
  const response = await axios.get(requestString);
  return response;
};

export default apiService;
