import { useState } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { Header, Form, Button, Input } from './SearchBar.styled';

const EMPTY_STRING = '';

const INPUT = {
  PLACEHOLDER: 'Search images and photos',
  EMPTY_MESSAGE: 'Field can not be empty!',
};

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState(EMPTY_STRING);

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedValue = value.trim().toLowerCase();

    if (normalizedValue === EMPTY_STRING) {
      toast.error(INPUT.EMPTY_MESSAGE);
      return;
    }
    onSubmit(normalizedValue);
    setValue(EMPTY_STRING);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <SearchIcon width={24} height={24} />
        </Button>
        <Input
          onChange={(event) => setValue(event.target.value)}
          value={value}
          type="search"
          autocomplete="off"
          placeholder={INPUT.PLACEHOLDER}
        />
      </Form>
    </Header>
  );
}
