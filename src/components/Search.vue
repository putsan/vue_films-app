<template>
  <div class="Search">
    <div
      class="Search__container"
    >
      <input
        type="text"
        v-model.lazy="query"
        placeholder="🔍 Find what you want ;)"
        class="Search__input"
      />
      <button
        v-if="query.length"
        class="Search__clean"
        @click="query = ''"
      >
        X
      </button>
    </div>
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
      this.onChange();
    },
  },
};
</script>

<style lang="scss" scoped>
  .Search {
    display: flex;
    justify-content: center;

    margin-bottom: 15px;

    &__container {
      position: relative;
    }

    &__input {
      padding-bottom: 4px;

      font-size: 1.3em;
      text-align: center;

      background: transparent;
      border: none;
      border-top: 1px solid transparent;
      border-bottom: 1px solid #212121;

      &::placeholder {
        color: #212121;
      }

      &:focus {
        border-bottom-style: dotted;

        outline: none;
      }
    }

    &__clean {
      position: absolute;
      top: 50%;
      right: 0%;
      color: #212121;

      border: none;
      background: transparent;
      transform: translateY(-50%);

      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

</style>
