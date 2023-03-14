import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { apiService } from './services';
import { useLocalStorage } from './hooks';
import { light, dark } from './theme';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import { GlobalStyle } from './styles';
import { AppContainer } from './App.styled';

const FIRST_PAGE = 1;
const PER_PAGE = 12;
const MESSAGE = {
  ERROR: 'Oops, something went wrong :( Please, reset page or try later',
  NOTHING_FOUND: 'Nothing found on your request :(',
};
const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  LS_KEY: 'theme',
};

const App = () => {
  const [query, setQuery] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(FIRST_PAGE);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useLocalStorage(THEME.LS_KEY, THEME.LIGHT);
  const totalPages = useRef(0);
  const toastID = useRef<any>(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    (async function () {
      try {
        const response = await apiService(query, PER_PAGE, page);
        const data = response?.data?.hits;

        if (data?.length < 1 && !toast.isActive(toastID.current)) {
          //Prevent toast duplicate(from docs) when changing query and page, but nothing was found
          toastID.current = toast.info(MESSAGE.NOTHING_FOUND);
        }

        if (page > FIRST_PAGE) {
          setData((prevData) => [...prevData, ...data]);
        } else {
          setData(data);
          window.scrollTo(0, 0);

          const totalHits = response?.data?.totalHits;
          totalPages.current = Math.ceil(totalHits / PER_PAGE);
        }
      } catch (error) {
        toast.error(MESSAGE.ERROR);
        console.error((error as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, query]);

  const handleSubmit = (newQuery: string) => {
    setQuery(newQuery);
    setPage(FIRST_PAGE);
  };

  const loadMore = () => setPage((page) => page + 1);

  const handleSwitchTheme = (themeBool: boolean) => {
    const theme = themeBool ? THEME.DARK : THEME.LIGHT;
    setTheme(theme);
  };

  const hasData = data?.length > 0;
  const hasNextPage = totalPages.current > page;
  const themeBool = theme === THEME.DARK;

  return (
    <>
      <ThemeProvider theme={themeBool ? dark : light}>
        <GlobalStyle />
        <AppContainer>
          <SearchBar
            onSubmit={handleSubmit}
            onSwitchTheme={handleSwitchTheme}
            themeBool={themeBool}
          />
          {hasData && <ImageGallery items={data} />}
          {hasNextPage && (
            <Button onClick={loadMore} disabled={loading}>
              {loading ? 'Loading...' : 'Load more'}
            </Button>
          )}
        </AppContainer>
        {loading && <Loader />}
        <ToastContainer theme={theme} autoClose={2500} limit={3} />
      </ThemeProvider>
    </>
  );
};

export default App;
