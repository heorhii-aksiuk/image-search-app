import { createPortal } from 'react-dom'
import { Oval } from 'react-loader-spinner'
import { Overlay } from './Loader.styled'

const modalRoot = document.getElementById('modal-root')

export default function Loader() {
  return createPortal(
    <Overlay>
      <Oval
        color="#3f51b5"
        height={100}
        width={100}
        ariaLabel="loading"
        strokeWidth={4}
        secondaryColor="#5767c3"
      />
    </Overlay>,
    modalRoot,
  )
}
