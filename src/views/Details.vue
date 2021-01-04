<template>
  <div>
    <h1>THis is page id: {{ $route.params.id }}</h1>
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
</style>
