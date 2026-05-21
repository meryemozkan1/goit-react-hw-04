import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";

// Klasör derinlikleri görseldeki ağaca göre (../../) olarak düzeltildi
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

// Unsplash API fonksiyonu import edildi (src altındaki unsplash-api.js dosyası için)
import { fetchImages } from "../../unsplash-api";

import css from "./App.module.css";

// Modal erişilebilirlik ayarı
Modal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  
  // Modal State'leri
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url, alt) => {
    setModalIsOpen(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalUrl("");
    setModalAlt("");
  };

  useEffect(() => {
    if (query === "") return;

    async function getImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />

      {images.length > 0 && <ImageGallery items={images} onImageClick={openModal} />}
      
      {isLoading && <Loader />}
      
      {isError && <ErrorMessage />}
      
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {/* React Modal Bileşeni */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalContent}>
          <img src={modalUrl} alt={modalAlt} className={css.modalImage} />
        </div>
      </Modal>
    </div>
  );
}