<template>
  <div class="row">

    <div class="card-panel col s12 m10 offset-m1 l6 offset-l3">
      <router-link to="/blog" class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">keyboard_arrow_left</i></router-link>
      <h3 v-if="this.article">{{ this.article.title }}</h3>
    </div>
    
    <div v-cloak class="card col s12 m10 offset-m1 l8 offset-l2">
      <div class="card-content">
        <p v-if="this.article">{{ this.article.body }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BlogArticleRead',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      article: null
    }
  },
  created () {
    this.fetchArticle(this.id)
  },
  methods: {
    fetchArticle (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => this.article = json)
    }
  }
}
</script>

<style scoped>

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

  div.card-content {
    padding: 40px;
  }

  div.card-content h4 {
    margin: 10px 0 20px 0;
    text-decoration: underline;
  }

  div.card-content p {
    font-size: 1.5rem;
  }

</style>
