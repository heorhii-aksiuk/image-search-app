import React, { Component } from 'react'
import Modal from '../Modal'
import { Item, Image } from './ImageGalleryItem.styled'

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
