<template>
  <div class="Movies">
    <h1 class="Movies__title">Popular Movies</h1>

    <Search
      @handle-query="handleQuery"
    />
    <MoviesList
      :popular="popular"
      @load-popular="loadPopular"
    />
  </div>
</template>

<script>
import getPopular from '@/api/popularMovies';
import MoviesList from '@/components/MoviesList.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Movies',
  data() {
    return {
      popular: [],
      page: 1,
      query: '',
    };
  },
  methods: {
    handleQuery(query) {
      this.query = query;
    },
    async loadPopular() {
      const films = await getPopular(this.page);

      this.popular = [
        ...this.popular,
        ...films,
      ];
      this.page += 1;
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
