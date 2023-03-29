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
import {
  FIRST_PAGE,
  PER_PAGE,
  THEME,
  ERROR_MESSAGE,
  NOTHING_FOUND_MESSAGE,
  LOADING,
  LOAD_MORE,
} from './constants';

function App() {
  const [query, setQuery] = useState<string | null>(null);
  //TODO: type data
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(FIRST_PAGE);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useLocalStorage(THEME.LS_KEY, THEME.LIGHT);
  const totalPages = useRef(0);
  const toastID = useRef<any>(null);

  //TODO: move in separate file?
  useEffect(() => {
    if (!query) return;
    setLoading(true);

    (async () => {
      try {
        const response = await apiService(query, PER_PAGE, page);
        const data = response?.data?.hits;

        if (data?.length < 1 && !toast.isActive(toastID.current)) {
          //Prevent toast duplicate(from docs) when changing query and page, but nothing was found
          toastID.current = toast.info(NOTHING_FOUND_MESSAGE);
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
        toast.error(ERROR_MESSAGE);
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
  // TODO: enum?
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
              {loading ? LOADING : LOAD_MORE}
            </Button>
          )}
        </AppContainer>
        {loading && <Loader />}
        <ToastContainer theme={theme} autoClose={2500} limit={3} />
      </ThemeProvider>
    </>
  );
}

export default App;
