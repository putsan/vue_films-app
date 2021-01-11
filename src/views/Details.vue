<template>
  <div class="Details">
    <div class="Details__wrapper">
      <div class="Details__left-side">
        <Poster
          v-if="movieDetails"
          :favoritesIds="favoritesIds"
          :movie="movieDetails"
          @handle-favorite="handleFavorite"
        />
      </div>

      <div
        v-if="movieDetails"
        class="Details__right-side"
      >
        <h2 class="Details__title">{{ movieDetails.title}}</h2>

        <p class="Details__description">
          {{ movieDetails.overview }}
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
    movieDetails: null,
  }),

  methods: {
    async loadDetails() {
      this.movieDetails = await moveisAPI.getDetails(this.$route.params.id);
    },
    handleFavorite() {
      this.$emit('handle-favorite');
    },
  },

  components: {
    Poster,
  },

  computed: {
    isDataLoaded() {
      return Object.keys(this.movieDetails);
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

    &__wrapper {
      display: flex;
      justify-content: space-between;
      max-width: 75vw;
      padding-bottom: 40px;
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

      color: #000;
      font-weight: 700;
      text-align: center;
      text-decoration: none;

      background: $contrast;
      border-radius: $main-radius;
    }
  }

</style>
