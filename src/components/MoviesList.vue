<template>
  <div class="MovieList">
    <ul class="MovieList__list">
      <div
        class="MovieList__loader"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="limit"
      >
        <MovieCard
          v-for="movie in popular"
          :key="movie.id"
          :movie="movie"
          :genres="genresIndex"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import { getPopular } from '@/api/popularMovies';
import genres from '@/api/genres';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MoviesList',
  data() {
    return {
      popular: [],
      limit: 20,
      busy: false,
      page: 1,
      genresIndex: {},
    };
  },
  methods: {
    async loadMore() {
      this.busy = true;

      const films = await getPopular(this.page);
      this.page += 1;

      this.popular = [
        ...this.popular,
        ...films,
      ];
      this.busy = false;
    },
    async prepareGenres() {
      const movieGenres = await genres();

      console.log(movieGenres);

      this.genresIndex = movieGenres.reduce((acc, genre) => ({
        ...acc,
        [genre.id]: genre.name,
      }), {});
    },
  },
  created() {
    this.prepareGenres();
    this.loadMore();
  },
  components: {
    MovieCard,
  },
};
</script>

<style scoped lang="scss">
  $cell-size: 258px;

  .MovieList {
    &__list {
      margin: 0;
      padding-left: 0;

      list-style: none;
    }

    &__loader {
      display: grid;
      grid-template-columns: repeat(auto-fill, $cell-size);
      justify-content: center;
      gap: 50px 48px;
      padding: 0 40px 50px;

      @media (min-width: 1200px) {
        grid-template-columns: repeat(4, $cell-size);
      }
    }
  }
</style>
