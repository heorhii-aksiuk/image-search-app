import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Box } from './Modal.styled';

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

type Props = {
  onClose(): void;
  children: ReactNode;
};

export default function Modal({ onClose, children }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleClick} title="Click to close">
      <Box onDoubleClick={onClose} title="Double click to close">
        {children}
      </Box>
    </Overlay>,
    modalRoot,
  );
}
