import React, { Component } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import apiRequest from './services/api'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Button from './components/Button/Button'
import Loader from './components/Loader/Loader'
import GlobalStyle from './styles'

const FIRST_PAGE = 1
const PER_PAGE = 12
const MESSAGE = {
  ERROR: 'Oops, something went wrong :( Please, reset page or try later',
  NOTHING_FOUND: 'Nothing found on your request :(',
}

export default class App extends Component {
  state = {
    query: null,
    page: FIRST_PAGE,
    data: [],
    loading: false,
  }

  totalPages = 0

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state
    let pageRequest
    const newQuery = query !== prevState.query
    const nextPage = page > prevState.page

    if (!newQuery && !nextPage) return
    if (newQuery) {
      pageRequest = FIRST_PAGE
    }
    if (nextPage) {
      pageRequest = page
    }

    this.setState({ loading: true })

    try {
      const response = await apiRequest(query, PER_PAGE, pageRequest)

      if (response.status !== 200) {
        throw new Error(MESSAGE.ERROR)
      }

      const data = response?.data?.hits

      if (data?.length < 1) {
        toast.info(MESSAGE.NOTHING_FOUND)
      }

      const totalHits = response?.data?.totalHits
      this.totalPages = Math.ceil(totalHits / PER_PAGE)

      if (newQuery) {
        this.setState({ page: FIRST_PAGE, data })
        window.scrollTo(0, 0)
      }

      if (nextPage) {
        this.setState((state) => ({
          data: [...state.data, ...data],
        }))
      }
    } catch (error) {
      toast.error(error.message)
      console.error(error.message)
    } finally {
      this.setState({ loading: false })
    }
  }

  setQuery = (query) => {
    this.setState({ query })
  }

  loadMore = () => {
    this.setState((state) => ({
      page: state.page + 1,
    }))
  }

  render() {
    const { loading, data, page } = this.state
    const hasData = data?.length > 0
    const hasNextPage = this.totalPages > page

    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <SearchBar onSubmit={this.setQuery} />
          {hasData && <ImageGallery items={data} />}
          {hasNextPage && (
            <Button onClick={this.loadMore} disabled={loading}>
              {loading ? 'Loading...' : 'Load more'}
            </Button>
          )}
        </AppContainer>
        {loading && <Loader />}
        <ToastContainer autoClose={2500} limit={1} />
      </>
    )
  }
}

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`
