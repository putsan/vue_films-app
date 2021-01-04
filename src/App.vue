<template>
  <div class="App">
    <div id="nav">
      <router-link to="/vue_films-app">Movies</router-link> |
      <router-link to="/vue_films-app/details">Details</router-link>
    </div>
    <!-- <Movies /> -->
    <router-view />
  </div>
</template>

<script>
// import Movies from '@/views/Movies.vue';

export default {
  name: 'App',
  components: {
    // Movies,
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
</style>
