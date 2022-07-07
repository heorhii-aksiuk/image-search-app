import React, { Component } from 'react'
import styled from 'styled-components'
import { createPortal } from 'react-dom'

const CLOSE_INFO = {
  OVERLAY: 'Click to close',
  BOX: 'Double click to close',
}

const modalRoot = document.getElementById('modal-root')

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    document.body.style.overflow = 'unset'
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose()
    }
  }

  handleClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose()
    }
  }

  render() {
    return createPortal(
      <Overlay onClick={this.handleClick} title={CLOSE_INFO.OVERLAY}>
        <Box onDoubleClick={this.props.onClose} title={CLOSE_INFO.BOX}>
          {this.props.children}
        </Box>
      </Overlay>,
      modalRoot,
    )
  }
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
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  cursor: pointer;
`
const Box = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  cursor: auto;
`
