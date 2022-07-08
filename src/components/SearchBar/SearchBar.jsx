import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { Header, Form, Button, Input } from './SearchBar.styled'

const EMPTY_STRING = ''

const INPUT = {
  PLACEHOLDER: 'Search images and photos',
  EMPTY_MESSAGE: 'Field can not be empty!',
}

export default class SearchBar extends Component {
  state = { value: EMPTY_STRING }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({ value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { value } = this.state
    const { onSubmit } = this.props

    if (value.trim() === EMPTY_STRING) {
      toast.error(INPUT.EMPTY_MESSAGE)
      return
    }
    onSubmit(value.toLowerCase())
    this.setState({ value: EMPTY_STRING })
  }

  render() {
    const { value } = this.state
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <SearchIcon width={24} height={24} />
          </Button>
          <Input
            onChange={this.handleChange}
            value={value}
            type="search"
            autocomplete="off"
            placeholder={INPUT.PLACEHOLDER}
          />
        </Form>
      </Header>
    )
  }
}
