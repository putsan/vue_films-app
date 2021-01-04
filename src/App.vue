<template>
  <div class="App">
    <h1 class="App__title">Popular Movies</h1>

    <Search
      @handle-query="handleQuery"
    />

    <router-view
      @load-popular="loadPopular"
      :popular="popular"
    />
  </div>
</template>

<script>
import moviesAPI from '@/api/moviesAPI';
import Search from '@/components/Search.vue';

export default {
  name: 'App',
  data: () => ({
    popular: [],
    query: '',
  }),

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
    async loadByQuery() {
      const { films, totalPages } = await moviesAPI.getMoviesByQuery(this.query, this.page);

      this.reloadFromStart();
      this.totalPages = totalPages;

      if (!totalPages) {
        return;
      }

      this.updateList(films);
    },
    async loadPopular() {
      const films = await moviesAPI.getPopular(this.page);

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
    Search,
  },
};
</script>

<style lang="scss">
  body {
    margin: 0;

    font-family: 'Noto Sans', sans-serif;
    color: #212121;

    background: #ebe8de;

    box-sizing: border-box;
  }

  p {
    margin: 0;;
  }

  .App {
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
