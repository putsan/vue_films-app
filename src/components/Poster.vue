<template>
  <div class="Poster">
    <span class="Poster__release-year">
      {{ takeYear }}
    </span>

    <img
      :src="pathToPoster"
      class="Poster__image"
      alt="A poster to the film"
    />

    <button
      type="button"
      class="Poster__button-like"
      @click="favorite"
    >
      {{ checkFavorite }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    favoritesIds: Array,
    movie: {
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
    checkFavorite() {
      const parsedIds = this.favoritesIds.map((id) => +id);

      return (!parsedIds.includes(this.movie.id)) ? '🖤' : '❤️';
    },
    pathToPoster() {
      return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`;
    },
    takeYear() {
      return +this.movie.release_date.split('-')[0];
    },
  },
};
</script>

<style lang="scss" scoped>
  $year-and-like-position: 8px;

  .Poster {
    position: relative;

    &__release-year {
      position: absolute;
      top: $year-and-like-position;
      left: $year-and-like-position;

      padding: 0 3px;
      font-weight: 700;

      background: $contrast;
      border-radius: $main-radius;
    }

    &__image {
      width: $card-image-size;
      height: $card-image-heigth;
      min-height: $card-image-heigth;

      border-radius: $main-radius;
    }

    &__button-like {
      position: absolute;
      top: $card-image-heigth - 38px;
      right: $year-and-like-position;
      padding: 1px;

      font-size: 1.5em;

      border: none;
      background: rgba(255, 255, 255, 0.55);
      border-radius: $main-radius;

      transition: transform 500ms ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(0.85);
      }
    }
  }
</style>
