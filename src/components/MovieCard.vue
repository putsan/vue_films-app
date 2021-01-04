<template>
  <li
    class="Card"
    data-aos="slide-up"
    data-aos-offset="100"
    data-aos-easing="ease-out-back"
    @mouseenter="hover = !hover"
    @mouseleave="hover = !hover"
  >
    <span class="Card__release-year">
      {{takeYear}}
    </span>

    <img
      :src="getPoster"
      class="Card__image"
      alt="A poster to the film"
    />

    <button
      type="button"
      class="Card__button-like"
      @click="favorite"
    >
      {{ checkFavorite }}
    </button>

    <div class="Card__body">
      <h4 class="Card__title">
        {{movie.title}}
      </h4>

      <div
      v-show="hover"
        class="Card__hide-body"
      >

        <p class="Card__paragraph">
          {{movie.overview}}
        </p>

        <button
          type="button"
          class="Card__button-details"
        >
          More Details
        </button>

        <ul class="Card__genresList">
          <li
            v-for="genre in getGenres"
            :key="genre"
            class="Card__genre"
          >
            {{ `• ${genre} •` }}
          </li>
        </ul>
      </div>
    </div>
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
    favorite() {
      const { id } = this.movie;

      if (localStorage.getItem(id)) {
        localStorage.removeItem(id);
      } else {
        localStorage.setItem(id, JSON.stringify(this.movie));
      }
      this.$emit('handle-favorite');
    },
  },

  computed: {
    getPoster() {
      return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`;
    },
    getGenres() {
      return this.movie.genre_ids.map((genreId) => this.genres[genreId]);
    },
    takeYear() {
      return this.movie.release_date.split('-')[0];
    },
    checkFavorite() {
      const parsedIds = this.favoritesIds.map((id) => +id);

      return (!parsedIds.includes(this.movie.id)) ? '🖤' : '❤️';
    },
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

    &:hover {
      border-color: #000;
    }

    &__release-year {
      position: absolute;
      top: $year-and-like-position;
      left: $year-and-like-position;

      padding: 0 3px;

      background: yellow;
      border-radius: $main-radius;
    }

    &__image {
      width: $card-image-size;
      height: $card-image-size + 65;
      min-height: $card-image-size + 65;

      border-radius: $main-radius;
    }

    &__title {
      @include text-owerflow(2);

      margin: 0;

      font-size: 1.2em;
      text-align: center;
    }

    &__hide-body {
      position: absolute;
      bottom: -160px;

      background: red;
      z-index: 5;
    }

    &__body {
      padding: 0 8px 10px;
    }

    &__button-like {
      position: absolute;
      top: 62%;
      right: $year-and-like-position;
      padding: 1px;

      font-size: 1.5em;

      border: none;
      background: rgba(255, 255, 255, 0.55);
      border-radius: $main-radius;

      transition: transform 500ms ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }

    &__paragraph {
      @include text-owerflow(3);
    }

    &__button-details {
      width: 100%;
    }

    &__genresList {
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;

      margin: 0;
      padding-left: 0;

      list-style: none;
    }
  }
</style>
