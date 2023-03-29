import { useEffect, useId } from 'react';
import { useToggle } from '../../hooks';
import {
  Container,
  Toggle,
  Label,
  SunIcon,
  MoonIcon,
} from './ThemeSwitch.styled';

type Props = {
  onSwitchTheme(themeBool: boolean): void;
  themeBool: boolean;
};

function ThemeSwitch({ onSwitchTheme, themeBool: initialThemeBool }: Props) {
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

export default ThemeSwitch;
