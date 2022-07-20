import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { apiRequest } from './services';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import GlobalStyle from './styles';
import { dark } from './theme';
import { AppContainer } from './App.styled';

const FIRST_PAGE = 1;
const PER_PAGE = 12;
const MESSAGE = {
  ERROR: 'Oops, something went wrong :( Please, reset page or try later',
  NOTHING_FOUND: 'Nothing found on your request :(',
};

export default function App() {
  const [query, setQuery] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(FIRST_PAGE);
  const [loading, setLoading] = useState(false);
  const totalPages = useRef(0);
  const toastID = useRef(null);

  useEffect(() => {
    if (!query) return;
    setPage(FIRST_PAGE);
  }, [query]);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    (async function () {
      try {
        const response = await apiRequest(query, PER_PAGE, page);
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
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, query]);

  const loadMore = () => setPage((page) => page + 1);

  const hasData = data?.length > 0;
  const hasNextPage = totalPages.current > page;

  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <AppContainer>
          <SearchBar onSubmit={(query) => setQuery(query)} />
          {hasData && <ImageGallery items={data} />}
          {hasNextPage && (
            <Button onClick={loadMore} disabled={loading}>
              {loading ? 'Loading...' : 'Load more'}
            </Button>
          )}
        </AppContainer>
        {loading && <Loader />}
        <ToastContainer autoClose={2500} limit={1} />
      </ThemeProvider>
    </>
  );
}
