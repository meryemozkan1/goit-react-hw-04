// src/unsplash-api.js
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      page: page,
      per_page: 12,
      orientation: "landscape",
    },
    headers: {
      // Kopyaladığın Access Key'i 'Client-ID ' ifadesinden sonra buraya yapıştır
      Authorization: "Client-ID xuMSC_rDyVuvr_yVJf0B5OTEEdCtQVcyvd85Zz1xooM",
    },
  });
  return response.data;
};