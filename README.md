# GoIT React Homework #4 - Image Search Application

This project is the fourth homework assignment within the GoIT React Developer program. It builds an interactive image search application integrating the **Unsplash API**, **Axios** for HTTP requests, **React Hot Toast** for notifications, **React Modal** for high-resolution image viewing, and **React Loader Spinner**.

## 🚀 Live Demo
- [View Live Application on Vercel](https://goit-react-hw-04-ivory-seven.vercel.app/)

## 🛠️ Components & Features Included
1. **SearchBar (`<SearchBar>`):** Accepts search keywords and validates empty inputs using `react-hot-toast`.
2. **ImageGallery & ImageCard (`<ImageGallery>` & `<ImageCard>`):** Renders responsive image grids with click handlers.
3. **Loader (`<Loader>`):** Displays loading animations beneath the gallery during active pagination requests.
4. **LoadMoreBtn (`<LoadMoreBtn>`):** Appends subsequent sets of images to the existing gallery.
5. **ImageModal (`<ImageModal>`):** Displays regular-sized images and detailed metadata (author, likes) inside a dark overlay modal via `react-modal`.
6. **Error Handling (`<ErrorMessage>`):** Gracefully renders network error feedback.

## 📂 Project Structure
- `src/components/SearchBar/` — SearchBar component & CSS module
- `src/components/ImageGallery/` — ImageGallery component & CSS module
- `src/components/ImageCard/` — ImageCard component & CSS module
- `src/components/Loader/` — Loader component & CSS module
- `src/components/ErrorMessage/` — ErrorMessage component & CSS module
- `src/components/LoadMoreBtn/` — LoadMoreBtn component & CSS module
- `src/components/ImageModal/` — ImageModal component & CSS module
- `src/App.jsx` — Root component managing state, API requests, and modal logic

## 🛠️ Technologies & Tools Used
- **React (v18+):** Functional components, `useState`, and `useEffect` hooks.
- **HTTP Client:** Axios.
- **UI & Notifications:** React Hot Toast, React Modal, React Loader Spinner.
- **Bundler:** Vite.
- **Styling:** CSS Modules.
- **Deployment:** Vercel.
