<template>
  <main class="row">
    <div class="col s12 m10 offset-m1 l8 offset-l2">

      <div class="card-panel col s12 m10 offset-m1 l8 offset-l2">
        <router-link to="/" class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">home</i></router-link>
        <h3>Blog</h3>
      </div>

      <Article class="col s12 m10 offset-m1 l8 offset-l2"
        v-for="i in 2"
        :key="i"
        :id="i">
      </Article>

    </div>
  </main>
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

  main {
    flex: 1 0 auto;
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

  div.card-panel .btn-floating {
    position: absolute;
    top: 31.5px;
    left: -28px;
  }

</style>
