import getData from './getData';

export function getPopular(page = 1) {
  return getData('/movie/popular', `&page=${page}`);
}

export function getSearchedMovies() {
  return 5;
}
