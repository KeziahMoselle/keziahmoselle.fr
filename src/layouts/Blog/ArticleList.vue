<template>
  <div class="row">
    <div class="col s12 m10 offset-m1 l8 offset-l2">

      <div class="blog-panel card-panel col s12 m10 offset-m1 l8 offset-l2">
        <h3>Blog</h3>
        <router-link to="/" class="btn white black-text waves-effect waves-light"><i class="left material-icons">keyboard_arrow_left</i>Back Home</router-link>
      </div>

      <Article class="col s12 m10 offset-m1"
        v-for="i in 5"
        :key="i"
        :id="i">
      </Article>

    </div>
  </div>
</template>

<script>
import Article from '@/layouts/Blog/Article'

export default {
  name: 'BlogListArticles',
  components: {
    Article
  }
}
</script>

<style scoped>

  .blog-panel {
    display: flex;
    justify-content: space-between;
  }

  div.card-panel {
    position: relative;
    background-color: #1F1D20;
    padding: 40px;
    margin-bottom: 50px;
  }

  div.card-panel h3 {
    font-size: 36px;
    text-align: center;
  }

</style>
