<template>
  <div class="Movies">
    <h1 class="Movies__title">Popular Movies</h1>

    <Search
      @handle-query="handleQuery"
    />
    <MoviesList
      :popular="popular"
      :totalPages="totalPages"
      @load-popular="loadPopular"
    />
  </div>
</template>

<script>
import getPopular from '@/api/popularMovies';
import getMoviesByQuery from '@/api/search';
import MoviesList from '@/components/MoviesList.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Movies',
  data() {
    return {
      popular: [],
      page: 1,
      query: '',
      totalPages: 1,
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
  components: {
    MoviesList,
    Search,
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
