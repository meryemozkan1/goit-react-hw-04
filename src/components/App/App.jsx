// src/components/App/App.jsx
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

// Yeni oluşturduğumuz ImageModal bileşenini import ediyoruz
import ImageModal from "../ImageModal/ImageModal";

import { fetchImages } from "../../unsplash-api";
import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  
  // Modal State'leri aynen kalıyor
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

      {/* Eski ham Modal yerine yeni temiz ImageModal bileşenini çağırıyoruz */}
      <ImageModal 
        isOpen={modalIsOpen} 
        onClose={closeModal} 
        src={modalUrl} 
        alt={modalAlt} 
      />
    </div>
  );
}