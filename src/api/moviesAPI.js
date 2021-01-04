const API_KEY = 'd8ac5c243091006ca12b7a98c4cbc3dd';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getData(url, query = '') {
  const response = await fetch(`${BASE_URL}${url}?api_key=${API_KEY}${query}`);

  return response;
}

const moviesAPI = {
  async getPopular(page = 1) {
    const response = await getData('/movie/popular', `&page=${page}`);
    const { results } = await response.json();

    return results;
  },
  async getMoviesByQuery(query, page = 1) {
    const response = await getData('/search/movie', `&query=${query}&page=${page}&include_adult=false`);
    const { results, total_pages: totalPages } = await response.json();

    return {
      films: results,
      totalPages,
    };
  },
  async genres() {
    const response = await getData('/genre/movie/list');
    const { genres: collection } = await response.json();

    return collection;
  },
  async getDetails(movieID) {
    const response = await getData(`/movie/${movieID}`);
    const parsedInfo = await response.json();

    return parsedInfo;
  },
};

export default moviesAPI;
