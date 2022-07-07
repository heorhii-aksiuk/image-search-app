import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from '../Modal/Modal'

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.item
    const { showModal } = this.state

    return (
      <>
        <Item>
          <Image onClick={this.toggleModal} src={webformatURL} alt={tags} />
        </Item>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    )
  }
}

const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`
