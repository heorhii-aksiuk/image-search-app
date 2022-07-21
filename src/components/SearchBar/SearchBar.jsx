import { useState } from 'react';
import { toast } from 'react-toastify';
import ThemeSwitch from '../ThemeSwitch';
import { Header, Form, Button, Input, SearchIcon } from './SearchBar.styled';

const EMPTY_STRING = '';

const INPUT = {
  PLACEHOLDER: 'Search images and photos',
  EMPTY_MESSAGE: 'Field can not be empty!',
};

export default function SearchBar({ onSubmit, onSwitchTheme }) {
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
          <SearchIcon />
        </Button>
        <Input
          onChange={(event) => setValue(event.target.value)}
          value={value}
          type="search"
          autocomplete="off"
          placeholder={INPUT.PLACEHOLDER}
        />
      </Form>
      <ThemeSwitch onSwitchTheme={onSwitchTheme} />
    </Header>
  );
}
