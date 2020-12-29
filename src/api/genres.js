import getData from './getData';

async function genres() {
  const response = await getData('/genre/movie/list');
  const { genres: collection } = await response.json();

  return collection;
}

export default genres;
