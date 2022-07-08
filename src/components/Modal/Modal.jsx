import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, Box } from './Modal.styled'

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
