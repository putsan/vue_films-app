<template>
  <div class="Movies">
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
import moviesAPI from '@/api/moviesAPI';
import MoviesList from '@/components/MoviesList.vue';
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
      const films = await moviesAPI.getPopular(this.page);

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
    Favorites,
  },
};
</script>

<style lang="scss" scoped>
</style>
