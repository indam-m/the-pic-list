<template lang="pug">
  .loading-container
    img(src="../assets/loading.gif")
</template>

<script>
export default {
  name: 'BaseLoading'
}
</script>

<style scoped>
.loading-container {
  height: 70px;
  margin-top: -35px;
}
img {
  margin: auto;
  max-height: 80%;
}
</style>
