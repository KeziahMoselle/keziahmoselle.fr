<template>
  <main class="row">

    <div class="col s12 m10 offset-m1 l8 offset-l2">
      <div class="card-panel col s12">
        <h3>Blog</h3>
      </div>
    </div>

    <blog-article class="col s8 offset-s2"
      v-for="i in 5"
      :key="i">
    </blog-article>

  </main>
</template>

<script>
import BlogArticle from '@/components/BlogArticle'

export default {
  name: 'Blog',
  components: {
    BlogArticle
  }
}
</script>

<style scoped>

  div.card-panel {
    background-color: #1F1D20;
    padding: 40px;
    margin-bottom: 60px;
  }

  div.card-panel h3 {
    font-size: 36px;
    text-align: center;
  }

</style>
