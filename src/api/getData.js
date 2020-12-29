const API_KEY = 'd8ac5c243091006ca12b7a98c4cbc3dd';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getData(url, query = '') {
  const response = await fetch(`${BASE_URL}${url}?api_key=${API_KEY}${query}`);

  return response;
}

export default getData;
