import { useState } from 'react';
import { toast } from 'react-toastify';
import ThemeSwitch from '../ThemeSwitch';
import { Header, Form, Button, Input, SearchIcon } from './SearchBar.styled';
import { EMPTY_MESSAGE, INPUT_PLACEHOLDER } from '../../constants';

type Props = {
  onSubmit(query: string): void;
  onSwitchTheme(themeBool: boolean): void;
  themeBool: boolean;
};

function SearchBar({ onSubmit, onSwitchTheme, themeBool }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedValue = value.trim().toLowerCase();

    if (normalizedValue === '') {
      toast.error(EMPTY_MESSAGE);
      return;
    }
    onSubmit(normalizedValue);
    setValue('');
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
          autoComplete="off"
          placeholder={INPUT_PLACEHOLDER}
        />
      </Form>
      <ThemeSwitch onSwitchTheme={onSwitchTheme} themeBool={themeBool} />
    </Header>
  );
}

export default SearchBar;
