import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, Box } from './Modal.styled'

const CLOSE_INFO = {
  OVERLAY: 'Click to close',
  BOX: 'Double click to close',
}

const modalRoot = document.getElementById('modal-root')

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <Overlay onClick={handleClick} title={CLOSE_INFO.OVERLAY}>
      <Box onDoubleClick={onClose} title={CLOSE_INFO.BOX}>
        {children}
      </Box>
    </Overlay>,
    modalRoot,
  )
}
