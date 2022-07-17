import { useToggle } from '../../hooks';
import Modal from '../Modal';
import { Item, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  item: { webformatURL, largeImageURL, tags },
}) {
  const [showModal, toggleModal] = useToggle();

  return (
    <>
      <Item>
        <Image onClick={toggleModal} src={webformatURL} alt={tags} />
      </Item>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
}
