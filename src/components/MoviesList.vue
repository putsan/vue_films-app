<template>
  <div class="MovieList">
    <h1 class="MovieList__title">Title</h1>

    <ul class="MovieList__list">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="limit"
      >
        <!-- <MovieCard
          v-for="movie in popular"
          :key="movie.id"
          :movie="movie"
        /> -->

        <li
          v-for="post in popular"
          :key="post.id"
          style="margin-bottom: 2em; border: 1px solid;"
          data-aos="slide-up"
          data-aos-offset="100"
          data-aos-easing="ease-out-back"
        >
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{post.title}}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <!-- <p>{{post.body}}</p> -->
              </div>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { getPopular } from '@/api/popularMovies';
// import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MoviesList',
  data() {
    return {
      popular: [],
      limit: 10,
      busy: false,
      page: 1,
    };
  },
  methods: {
    async loadMore() {
      console.log('Adding N more data results');
      this.busy = true;

      const films = await getPopular(this.page);
      this.page += 1;

      this.popular = [
        ...this.popular,
        ...films,
      ];
      this.busy = false;
    },
  },
  created() {
    this.loadMore();
  },
  components: {
    // MovieCard,
  },
};
</script>

<style scoped lang="scss">
  .MovieList {
    &__list {
      list-style: none;
  }
}
</style>
