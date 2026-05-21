
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {items.map((item, index) => (
        // key değerine resmin id'si ile birlikte dizideki index sırasını ekleyerek benzersiz yapıyoruz:
        <li key={`${item.id}-${index}`} className={css.item}>
          <ImageCard data={item} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}