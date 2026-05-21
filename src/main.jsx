import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";

// Olmayan index.css importu kaldırıldı veya yorum satırına alındı:
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);