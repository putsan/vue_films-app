<template>
  <li
    class="Card"
    data-aos="slide-up"
    data-aos-offset="100"
    data-aos-easing="ease-out-back"
  >
    <img
      :src="getPoster"
      class="Card__image"
      alt="A poster to the film"
    />

    <div class="Card__body">
      <h4 class="Card__title">
        {{movie.title}}
      </h4>

      <div class="Card__subheader">
        <span>{{movie.release_date}}</span>

        <div
          class="Card__buttons"
        >
          <button
            type="button"
            class="Card__button"
            @click="favorite"
          >
            {{ checkFavorite }}
          </button>
        </div>
      </div>

      <p class="Card__paragraph">
        {{movie.overview}}
      </p>

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
  },
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
    checkFavorite() {
      return !localStorage.getItem(this.movie.id) ? '🖤' : '❤️';
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

  $card-size: 258px;
  $image-size: 220px;
  $image-centered: ($card-size - $image-size) / 2;

  .Card {
    background: #fff;
    border: 1px solid #fff;

    &:hover {
      border-color: #000;
    }

    &__image {
      width: $image-size;
      height: $image-size + 65;
      margin: 15px $image-centered 0;
    }

    &__body {
      padding: 0 10px 10px;
    }

    &__title {
      @include text-owerflow(2);

      font-size: 1.2em;
    }

    &__subheader {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__buttons {
      padding-right: 10%;
    }

    &__button {
      font-size: 1.5em;

      border: none;
      background: transparent;

      transition: transform 1s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.3);
      }
    }

    &__paragraph {
      @include text-owerflow(5);
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
