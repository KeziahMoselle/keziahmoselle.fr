<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <router-view name="listArticles"></router-view>
    <router-view name="readArticle"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Blog',
}
</script>

<style>

</style>

