<template>
  <div class="Movies">
    <h1 class="Movies__title">Popular Movies</h1>

    <Search
      @handle-query="handleQuery"
    />

    <Favorites
      :favoritesIds="favoritesIds"
    />

    <MoviesList
      :popular="popular"
      :totalPages="totalPages"
      :favoritesIds="favoritesIds"
      @load-popular="loadPopular"
      @handle-favorite="handleFavorite"
    />
  </div>
</template>

<script>
import getPopular from '@/api/popularMovies';
import getMoviesByQuery from '@/api/search';
import MoviesList from '@/components/MoviesList.vue';
import Search from '@/components/Search.vue';
import Favorites from '@/components/Favorites.vue';

export default {
  name: 'Movies',
  data() {
    return {
      popular: [],
      page: 1,
      query: '',
      totalPages: 1,
      favoritesIds: [],
    };
  },
  methods: {
    handleQuery(query) {
      this.query = query;

      if (query.length) {
        this.loadByQuery();
      } else {
        this.reloadFromStart();
        this.loadPopular();
      }
    },
    async loadPopular() {
      const films = await getPopular(this.page);

      this.updateList(films);
    },
    async loadByQuery() {
      const { films, totalPages } = await getMoviesByQuery(this.query, this.page);

      this.reloadFromStart();
      this.totalPages = totalPages;

      if (!totalPages) {
        return;
      }

      this.updateList(films);
    },
    handleFavorite() {
      this.favoritesIds = Object.keys(localStorage)
        .filter((key) => localStorage.getItem(key)[0] === '{');
    },
    updateList(films) {
      this.popular = [
        ...this.popular,
        ...films,
      ];
      this.page += 1;
    },
    reloadFromStart() {
      this.popular = [];
      this.page = 1;
    },
  },
  mounted() {
    if (localStorage.length) {
      this.handleFavorite();
    }
  },
  components: {
    MoviesList,
    Search,
    Favorites,
  },
};
</script>

<style lang="scss" scoped>
  .Movies {
    &__title {
      position: relative;

      font-size: 3em;
      text-align: center;

      &::after {
        content: '';
        position: absolute;
        top: 110%;
        left: 50%;

        width: 55%;

        border-bottom: 1px #212121 solid;
        transform: translate(-50%);
      }
    }
  }
</style>
