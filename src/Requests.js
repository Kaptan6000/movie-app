const API_KEY = '67d34b7a693a655d5cf9cb187756ffa6';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en_US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
// https://api.themoviedb.org/3/trending/all/week?api_key=67d34b7a693a655d5cf9cb187756ffa6&languange=en-US

export default requests;