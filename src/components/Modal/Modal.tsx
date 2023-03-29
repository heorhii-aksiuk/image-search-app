import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Box } from './Modal.styled';

const CLOSE_INFO = {
  OVERLAY: 'Click to close',
  BOX: 'Double click to close',
};

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
    <Overlay onClick={handleClick} title={CLOSE_INFO.OVERLAY}>
      <Box onDoubleClick={onClose} title={CLOSE_INFO.BOX}>
        {children}
      </Box>
    </Overlay>,
    modalRoot,
  );
}
