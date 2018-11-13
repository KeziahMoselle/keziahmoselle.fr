<template>
  <main class="row">
    <div class="col s12 m10 offset-m1 l8 offset-l2">
      <router-view name="listArticles"></router-view>
      <router-view name="readArticle"></router-view>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Blog',
}
</script>

<style scoped>

  main {
    flex: 1 0 auto;
  }

</style>

