// src/components/ImageModal/ImageModal.jsx
import Modal from "react-modal";
import css from "./ImageModal.module.css";

// Modal erişilebilirlik ayarı artık burada tanımlanmalı
Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, src, alt }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <img src={src} alt={alt} className={css.modalImage} />
      </div>
    </Modal>
  );
}