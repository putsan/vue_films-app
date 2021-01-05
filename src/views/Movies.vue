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
import MoviesList from '@/components/MoviesList.vue';
import Favorites from '@/components/Favorites.vue';

export default {
  name: 'Movies',
  data() {
    return {
      totalPages: 1,
      favoritesIds: [],
    };
  },
  props: {
    popular: Array,
  },
  methods: {
    handleFavorite() {
      this.favoritesIds = Object.keys(localStorage)
        .filter((key) => localStorage.getItem(key)[0] === '{');
    },
    loadPopular() {
      this.$emit('load-popular');
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
