import ImageGalleryItem from '../ImageGalleryItem';
import { List } from './ImageGallery.styled';

type Props = {
  items: any[];
};

function ImageGallery({ items }: Props) {
  return (
    <List>
      {items.map((item) => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </List>
  );
}

export default ImageGallery;
