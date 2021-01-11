<template>
  <li
    class="Card"
    data-aos="slide-up"
    data-aos-offset="100"
    data-aos-easing="ease-out"
    data-aos-duration="2000"
    @mouseenter="hover = !hover"
    @mouseleave="hover = !hover"
  >
    <Poster
      :favoritesIds="favoritesIds"
      :movie="movie"
      @handle-favorite="handleFavorite"
    />

    <div class="Card__body">
      <h4 class="Card__title">
        {{ movie.title }}
      </h4>

      <div
        v-show="hover"
        class="Card__hide-body"
      >
        <ul class="Card__genresList">
          <li
            v-for="genre in getGenres"
            :key="genre"
            class="Card__genre"
          >
            {{ genre }}
          </li>
        </ul>

        <p class="Card__paragraph">
          {{ movie.overview }}
        </p>

        <router-link
          class="Card__route-to-details"
          :to="takePath"
        >
          See details
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
import Poster from '@/components/Poster.vue';

export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true,
    },
    genres: {
      type: Object,
      required: true,
    },
    favoritesIds: Array,
  },
  data: () => ({
    hover: false,
  }),

  methods: {
    handleFavorite() {
      this.$emit('handle-favorite');
    },
  },

  computed: {
    getGenres() {
      return this.movie.genre_ids.map((genreId) => this.genres[genreId]);
    },
    takePath() {
      return `/vue_films-app/details/${this.movie.id}`;
    },
  },

  components: {
    Poster,
  },
};
</script>

<style scoped lang="scss">
  @mixin text-owerflow($count: 1) {
    display: -webkit-box;
    -webkit-line-clamp: #{$count};
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;

    overflow: hidden;
  }

  $year-and-like-position: 8px;

  .Card {
    position: relative;

    background: #fff;
    border: 1px solid transparent;
    border-radius: $main-radius;

    transition: transform 800ms;

    &:hover {
      transform: scale(1.05);
      border-color: #000;
      z-index: 1;
    }

    &__title {
      @include text-owerflow(2);

      margin: 0;

      font-size: 1.2em;
      text-align: center;
    }

    &__hide-body {
      position: absolute;
      top: 99%;
      left: -1px;

      width: $cell-and-card-size - 18px;
      max-width: $cell-and-card-size - 2px;
      padding: 0 8px 8px;

      background: #fff;
      border: 1px solid #000;
      border-top: none;
      border-bottom-left-radius: $main-radius;
      border-bottom-right-radius: $main-radius;
    }

    &__body {
      padding-bottom: 8px;
    }

    &__genresList {
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;

      margin: 0;
      padding-left: 0;

      list-style: none;
    }

    &__genre {
      margin-right: 5px;
      margin-bottom: 5px;
      padding: 0 3px;

      font-size: 0.7em;
      text-transform: uppercase;

      background: $contrast;
      border-radius: $main-radius;

      &:last-child {
        margin-right: 0;
      }
    }

    &__paragraph {
      @include text-owerflow(3);
    }

    &__route-to-details {
      display: block;
      width: calc(100% - 4px);
      margin-top: 5px;
      padding: 5px 0;

      color: #000;
      font-size: 0.9em;
      font-weight: 700;
      text-align: center;
      text-decoration: none;

      border: 1px solid rgba(240, 240, 80, 0.893);
      border-radius: $main-radius;
      background: $contrast;
      outline-color: yellow;

      transition: border-color 800ms,
        background 800ms,
        transform 800ms;
      cursor: pointer;

      &:hover {
        border-color: yellow;
        background-color: #fff;
      }

      &:active {
        transform: scale(0.85);
        outline-color: yellow;
        outline-width: 3px;
      }
    }
  }
</style>
