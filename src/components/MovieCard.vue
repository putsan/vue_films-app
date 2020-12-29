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
      alt="A product"
    />

    <div class="Card__body">
      <h4 class="Card__title">
        {{movie.title}}
      </h4>

      <span>{{movie.release_date}}</span>

      <p class="Card__paragraph">
        {{movie.overview}}
      </p>

      {{movie.genre_ids}} {{genres}}

      <div
        class="Card__buttons"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          class="Card__button"
        >
          Details
        </button>

        <button
          type="button"
          class="Card__button"
        >
          Pin
        </button>
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
  },
  computed: {
    getPoster() {
      return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`;
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
  $image-size: 160px;
  $image-centered: ($card-size - $image-size) / 2;

  .Card {
    background: #fff;
    border: 1px solid #fff;

    &:hover {
      border-color: #000;
    }

    &__image {
      width: $image-size;
      height: $image-size + 40;
      margin: 25px $image-centered 0;
    }

    &__body {
      padding: 0 10px 10px;
    }

    &__title {
      font-size: 1.2em;
    }

    &__paragraph {
      @include text-owerflow(5);
    }
  }
</style>
