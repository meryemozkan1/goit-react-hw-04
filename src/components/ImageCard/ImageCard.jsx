
import css from "./ImageCard.module.css";

export default function ImageCard({ data, onClick }) {
  return (
    <div className={css.card} onClick={() => onClick(data.urls.regular, data.alt_description)}>
      <img src={data.urls.small} alt={data.alt_description} className={css.image} />
    </div>
  );
}