import { useEffect, useId } from 'react';
import { useToggle } from '../../hooks';
import {
  Container,
  Toggle,
  Label,
  SunIcon,
  MoonIcon,
} from './ThemeSwitch.styled';

export default function ThemeSwitch({ onSwitchTheme, theme: savedTheme }) {
  const [theme, toggleTheme] = useToggle(savedTheme);
  const id = useId();

  useEffect(() => {
    onSwitchTheme(theme);
  }, [onSwitchTheme, theme]);

  return (
    <Container>
      <Toggle
        onChange={() => toggleTheme()}
        type="checkbox"
        id={id}
        aria-label="Theme switch"
        checked={theme}
      />
      <Label aria-hidden="true" htmlFor={id} title="Theme switch"></Label>
      {theme ? <MoonIcon /> : <SunIcon />}
    </Container>
  );
}
