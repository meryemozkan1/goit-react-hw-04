
import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.error}>
      Bir hata oluştu. Lütfen sayfayı yenileyip tekrar deneyin.
    </p>
  );
}