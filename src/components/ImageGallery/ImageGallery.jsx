import ImageGalleryItem from '../ImageGalleryItem';
import { List } from './ImageGallery.styled';

export default function ImageGallery({ items }) {
  return (
    <List>
      {items.map((item) => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </List>
  );
}
