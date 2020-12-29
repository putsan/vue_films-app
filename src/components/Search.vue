<template>
  <div class="Search">
    <input
      type="text"
      v-model.lazy="query"
      placeholder="Find what you want ;)"
      class="Search__input"
    />
    <button
      class="Search__clean"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    onChange() {
      this.$emit('handle-query', this.query);
    },
  },
  watch: {
    query() {
      this.onChange(); // ЗАБРАТИ ПОВІЛЬНЕ ОНОВЛЕЕНЯ ВГОРІ
    },
  },
};
</script>

<style lang="scss" scoped>
  .Search {
    display: flex;
    justify-content: center;

    padding-bottom: 15px;

    &__input {
      height: 2em;
    }
  }

</style>
