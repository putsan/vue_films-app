<template>
  <div class="Favorites">
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
      return Object.keys(localStorage)
        .filter((key) => localStorage.getItem(key)[0] === '{')
        .map((key) => JSON.parse(localStorage.getItem(key)));
    },
  },
};
</script>

<style lang="scss" scoped>
  .Favorites {
    padding: 10px 25px;
    font-weight: 700;

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      padding-left: 0;
      list-style: none;
    }

    &__item {
      margin: 5px 5px;
    }
  }
</style>
