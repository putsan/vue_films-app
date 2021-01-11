<template>
  <div class="Movies">
    <Favorites
      v-if="favoritesIds.length"
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
  props: {
    popular: Array,
    totalPages: Number,
    favoritesIds: Array,
  },
  methods: {
    loadPopular() {
      this.$emit('load-popular');
    },
    handleFavorite() {
      this.$emit('handle-favorite');
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
  .Movies {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 40px;
  }
</style>
