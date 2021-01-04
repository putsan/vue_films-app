<template>
  <div>
    <h1 class="title"> THis is page id: {{ $route.params.id }}</h1>

    <p class="paragr">Lorem ipsum dolor sit amet consectetur adipisicing eliribus, corporis!</p>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data: () => ({

  }),

  created() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.paragr {
  background: red;
}
  .title:hover ~ .paragr {
    background: turquoise;
  }
</style>
