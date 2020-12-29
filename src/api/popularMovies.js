const API_KEY = 'd8ac5c243091006ca12b7a98c4cbc3dd';
const BASE_URL = 'https://api.themoviedb.org/3';

async function get(url) {
  const response = await fetch(`${BASE_URL}${url}&api_key=${API_KEY}`);
  const { results } = await response.json();

  return results;
}

export function getPopular(page = 1) {
  return get(`/movie/popular?page=${page}`);
}

export function getSearchedMovies() {
  return 5;
}
