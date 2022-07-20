import { ReactComponent as SunIcon } from '../../icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../icons/moon.svg';
import {
  Container,
  Icon,
  Control,
  Toggle,
  Track,
  Marker,
} from './ThemeSwitch.styled';

export default function ThemeSwitch() {
  return (
    <Container>
      <Icon>
        <SunIcon />
      </Icon>
      <Control>
        <Toggle
          type="checkbox"
          name="theme"
          id="theme-switch-toggle"
          aria-label="Theme switch"
        />
        <Track
          aria-hidden="true"
          class="theme-switch__track"
          for="theme-switch-toggle"
        ></Track>
        <Marker aria-hidden="true" class="theme-switch__marker"></Marker>
      </Control>
      <Icon>
        <MoonIcon />
      </Icon>
    </Container>
  );
}
