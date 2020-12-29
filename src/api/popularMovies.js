import getData from './getData';

export async function getPopular(page = 1) {
  const response = await getData('/movie/popular', `&page=${page}`);
  const { results } = await response.json();

  return results;
}

export function getSearchedMovies() {
  return 5;
}
