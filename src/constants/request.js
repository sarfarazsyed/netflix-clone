const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = "4a6cbaa3b5a8f0808bcdd4b9861b8b5b";
const requests = {
  //TV SHOW
  fetchTopRatedTVShow: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopularTVShow: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`,
  
  //MOVIES
  fetchPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchUpComingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchNowPlayingMovies: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
