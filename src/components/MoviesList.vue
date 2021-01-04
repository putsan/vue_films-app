<template>
  <div class="MovieList">
    <ul
      class="MovieList__list"
      v-if="totalPages"
    >
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
          :favoritesIds="favoritesIds"
          @handle-favorite="handleFavorite"
        />
      </div>
    </ul>

    <p
      v-else
      class="MovieList__message"
    >
      Don't was find anything by the query. Try another one!)
    </p>
  </div>
</template>

<script>
import genres from '@/api/genres';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MoviesList',
  props: {
    popular: Array,
    totalPages: Number,
    favoritesIds: Array,
  },
  data() {
    return {
      limit: 20,
      busy: false,
      genresIndex: {},
    };
  },
  methods: {
    loadMore() {
      this.busy = true;

      this.$emit('load-popular');
      this.busy = false;
    },
    async prepareGenres() {
      const movieGenres = await genres();

      this.genresIndex = movieGenres.reduce((acc, genre) => ({
        ...acc,
        [genre.id]: genre.name,
      }), {});
    },
    handleFavorite() {
      this.$emit('handle-favorite');
    },
  },
  created() {
    this.prepareGenres();
  },
  components: {
    MovieCard,
  },
};
</script>

<style scoped lang="scss">
  .MovieList {
    padding-top: 30px;
    &__list {
      margin: 0;
      padding-left: 0;

      list-style: none;
    }

    &__loader {
      display: grid;
      grid-template-columns: repeat(auto-fill, $cell-and-card-size);
      justify-content: center;
      gap: 30px;
      padding: 0 40px 50px;

      @media (min-width: 1200px) {
        grid-template-columns: repeat(4, $cell-and-card-size);
      }
    }

    &__message {
      text-align: center;
    }
  }
</style>
