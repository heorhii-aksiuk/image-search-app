export const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY as string;
export const API_BASE_URL = 'https://pixabay.com/api';

export const FIRST_PAGE = 1;
export const PER_PAGE = 12; // Numbers of pictures per page

//TODO: enum?
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  LS_KEY: 'theme',
};
