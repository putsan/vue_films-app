import getData from './getData';

function genres() {
  return getData('/genre/movie/list');
}

export default genres;
