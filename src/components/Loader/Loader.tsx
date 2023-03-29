import { createPortal } from 'react-dom';
import { Oval } from 'react-loader-spinner';
import { useTheme } from 'styled-components';
import { Overlay } from './Loader.styled';

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

export default function Loader() {
  const theme = useTheme();
  return createPortal(
    <Overlay>
      <Oval
        color={theme.accentColor}
        height={100}
        width={100}
        ariaLabel="loading"
        strokeWidth={4}
        secondaryColor={theme.loaderColor}
      />
    </Overlay>,
    modalRoot,
  );
}
