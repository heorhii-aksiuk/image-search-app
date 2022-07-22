import { useEffect, useId } from 'react';
import { useToggle } from '../../hooks';
import {
  Container,
  Toggle,
  Label,
  SunIcon,
  MoonIcon,
} from './ThemeSwitch.styled';

export default function ThemeSwitch({
  onSwitchTheme,
  themeBool: initialThemeBool,
}) {
  const [themeBool, toggleTheme] = useToggle(initialThemeBool);
  const id = useId();

  useEffect(() => {
    onSwitchTheme(themeBool);
  }, [onSwitchTheme, themeBool]);

  return (
    <Container>
      <Toggle
        onChange={() => toggleTheme()}
        type="checkbox"
        id={id}
        aria-label="Theme switch"
        checked={themeBool}
      />
      <Label aria-hidden="true" htmlFor={id} title="Theme switch"></Label>
      {themeBool ? <MoonIcon /> : <SunIcon />}
    </Container>
  );
}
