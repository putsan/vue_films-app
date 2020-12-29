import getData from './getData';

async function getPopular(page = 1) {
  const response = await getData('/movie/popular', `&page=${page}`);
  const { results } = await response.json();

  return results;
}

export default getPopular;
