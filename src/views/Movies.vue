<template>
  <div class="Movies">
    <h1 class="Movies__title">Popular Movies</h1>

    <MoviesList />
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue';

export default {
  name: 'Movies',
  components: {
    MoviesList,
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
