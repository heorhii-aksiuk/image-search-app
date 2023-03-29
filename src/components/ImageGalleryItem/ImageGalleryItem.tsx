import { useToggle } from '../../hooks';
import Modal from '../Modal';
import { Item, Image } from './ImageGalleryItem.styled';

type Props = {
  item: {
    // TODO: rename
    webformatURL: string;
    largeImageURL: string;
    tags: string;
  };
};

function ImageGalleryItem({
  item: { webformatURL, largeImageURL, tags },
}: Props) {
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

export default ImageGalleryItem;
