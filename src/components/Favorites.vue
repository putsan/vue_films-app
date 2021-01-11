<template>
  <div
    class="Favorites"
  >
    <h3 class="Favorites__title">
      Your favorites movies:
    </h3>

    <ul
      class="Favorites__list"
    >
      <li
        v-for="movie of localFavorites"
        :key="movie.id"
        class="Favorites__item"
        :style="{color: getColor(movie.id)}"
      >
        {{ `${movie.title}` }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  props: {
    favoritesIds: Array,
  },
  data() {
    return {
      collorCashe: {},
    };
  },
  methods: {
    getColor(id) {
      const r = () => Math.floor(Math.random() * 256);
      const color = this.collorCashe[id] || (this.collorCashe[id] = `rgb(${r()}, ${r()}, ${r()})`);

      return color;
    },
  },
  computed: {
    localFavorites() {
      return this.favoritesIds
        .map((key) => JSON.parse(localStorage.getItem(key)));
    },
  },
};
</script>

<style lang="scss" scoped>
  .Favorites {
    width: 75%;
    margin: auto;
    padding: 10px 25px;

    text-align: center;

    background: $contrast;
    border-radius: $main-radius;

    &__title {
      position: relative;
      margin: 0 0 15px;

      &::after {
        content: '';
        position: absolute;
        top: 110%;
        left: 50%;

        width: 55%;

        border-bottom: 1px #212121 dotted;
        transform: translate(-50%);
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      padding-left: 0;
      list-style: none;
    }

    &__item {
      margin: 5px 5px;
      padding: 0 5px;

      background: #fff;
      border-radius: $main-radius;
    }
  }
</style>
