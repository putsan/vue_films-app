<template>
  <div class="App">
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

  p {
    margin: 0;;
  }
</style>
