import styled from 'styled-components'
import { createPortal } from 'react-dom'
import { Oval } from 'react-loader-spinner'

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1300;
  cursor: wait;
`
