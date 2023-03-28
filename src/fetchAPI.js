import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0295bc0f580a974d57e0203ed698c033';

export const fetchTrendMovies = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByQuery = async searchQuery => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMovieCast = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
