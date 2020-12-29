<template>
  <li>
    <h2>{{ movie.title.toUpperCase() }}</h2>
    <!-- <br/> -->
    <!-- {{ movie.overview }} -->
  </li>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
  li {
    // padding-bottom: 15px;
  }
</style>
