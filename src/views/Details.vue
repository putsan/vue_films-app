<template>
  <div>
    <h1 class="title"> THis is page id: {{ $route.params.id }}</h1>
    {{ movieDetails }}
  </div>
</template>

<script>
import moveisAPI from '@/api/moviesAPI';

export default {
  name: 'Details',
  data: () => ({
    movieDetails: {},
  }),

  methods: {
    async loadDetails() {
      this.movieDetails = await moveisAPI.getDetails(this.$route.params.id);
    },
  },

  mounted() {
    this.loadDetails();
  },
};
</script>

<style lang="scss" scoped>

</style>
