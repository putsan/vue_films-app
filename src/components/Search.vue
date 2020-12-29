<template>
  <div class="Search">
    <input
      type="text"
      :value="query"
      placeholder="Find what you want ;)"
      class="Search__input"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    query: String,
  },
};
</script>

<style lang="scss" scoped>
  .Search {
    display: flex;
    justify-content: center;

    padding-bottom: 15px;

    &__input {

    }
  }

</style>
