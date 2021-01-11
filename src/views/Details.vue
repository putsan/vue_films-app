<template>
  <div class="Details">
    <div
      class="Details__background"
      :style="bgStyle"
    />

    <div class="Details__wrapper">
      <div class="Details__left-side">
        <Poster
          v-if="movie"
          :favoritesIds="favoritesIds"
          :movie="movie"
          @handle-favorite="handleFavorite"
        />
      </div>

      <div
        v-if="movie"
        class="Details__right-side"
      >
        <h2 class="Details__title">{{ movie.title}}</h2>

        <p class="Details__description">
          {{ movie.overview }}
        </p>
      </div>
    </div>

    <router-link to="/vue_films-app" class="Details__back-link">
      Back to popular
    </router-link>
  </div>
</template>

<script>
import moveisAPI from '@/api/moviesAPI';
import Poster from '@/components/Poster.vue';

export default {
  name: 'Details',
  props: {
    favoritesIds: Array,
  },
  data: () => ({
    movie: null,
    pathToBackground: '',
  }),

  methods: {
    async loadDetails() {
      const movieDetails = await moveisAPI.getDetails(this.$route.params.id);

      this.pathToBackground = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      this.movie = movieDetails;
    },

    handleFavorite() {
      this.$emit('handle-favorite');
    },
  },

  components: {
    Poster,
  },

  computed: {
    bgStyle() {
      return `background: center / cover no-repeat url(${this.pathToBackground});`;
    },
  },

  created() {
    this.loadDetails();
  },
};
</script>

<style lang="scss" scoped>
  .Details {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    padding: 25px;

    &__background {
      position: fixed;
      top: 0;
      right: 0;

      width: 100vw;
      height: 100vh;

      z-index: -1;
    }

    &__wrapper {
      position: relative;

      display: flex;
      justify-content: space-between;

      max-width: 75vw;
      min-height: 250px;
      min-width: 250px;
      margin-bottom: 65px;

      &::before {
        content: '';
        position: absolute;
        top: -180px;
        left: 50%;

        width: 105%;
        height: calc(100% + 310px);

        background: #ebe8deae;
        border-radius: $main-radius;

        transform: translateX(-50%);
        z-index: -1;
      }
    }

    &__left-side {
      margin-right: 25px;
    }

    &__image {
      width: $card-image-size;
      height: $card-image-heigth;
      min-height: $card-image-heigth;

      border-radius: $main-radius;
    }

    &__title {
      margin: 0 0 20px;
    }

    &__back-link {
      width: 35vw;
      padding: 8px 0;
      margin-bottom: 30px;

      color: #000;
      font-weight: 700;
      text-align: center;
      text-decoration: none;

      background: $contrast;
      border-radius: $main-radius;
    }
  }

</style>
