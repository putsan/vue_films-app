import getData from '@/api/getData';

async function getMoviesByQuery(query, page = 1) {
  const response = await getData('/search/movie', `&query=${query}&page=${page}&include_adult=false`);
  const { results, total_pages: totalPages } = await response.json();

  return {
    films: results,
    totalPages,
  };
}

export default getMoviesByQuery;
