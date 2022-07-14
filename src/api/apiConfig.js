const apiConfig = {
  baseUrl: "https://api.themovidb.org/3/",
  apiKey: "9fed0940850960498db5befbb0975eb4",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};

export default apiConfig;
