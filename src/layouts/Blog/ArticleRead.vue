<template>
  <div class="row">

    <div v-if="!error" class="card col s12 m10 offset-m1 l8 offset-l2">
      <h3 v-if="article">{{ article.title }}</h3>
      <div class="card-content">
        <div v-if="loading" class="progress">
          <div class="indeterminate"></div>
        </div>
        <p v-if="article">{{ article.body }}</p>
        <div class="center">
          <router-link to="/blog" class="btn white black-text waves-effect waves-light"><i class="left material-icons">keyboard_arrow_left</i>{{ $t('blog.back') }}</router-link>
        </div>
      </div>
    </div>

    <div v-if="error" class="col s12 m10 offset-m1 l6 offset-l3 card-panel white black-text center">
      <h4>{{ $t('blog.notFound') }}</h4>
      <router-link to="/blog" class="btn black waves-effect waves-light"><i class="left material-icons">keyboard_arrow_left</i>{{ $t('blog.back') }}</router-link>
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
      loading: true,
      article: null,
      error: null
    }
  },
  created () {
    this.fetchArticle(this.id)
  },
  methods: {
    fetchArticle (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          this.error = true
        }
      })
      .then(json => {
        this.loading = false
        this.article = json
      })
    }
  }
}
</script>

<style scoped>

  h3 {
    font-size: 2rem;
    color: black;
    display: inline-block;
    background-color: white;
    padding: 5px;
  }

  div.card-panel {  
    position: relative;
    background-color: #1F1D20;
    padding: 35px;
    margin-bottom: 50px;
  }

  div.card-panel h3 {
    font-size: 36px;
    text-align: center;
  }

  div.card-panel h4 {
    margin-bottom: 10px;
  }

  div.card-content {
    padding: 20px;
  }

  div.card-content h4 {
    margin: 10px 0 20px 0;
    text-decoration: underline;
  }

  div.card-content p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .progress {
    background-color: rgba(0, 0, 0, 0);
  }

  .progress .indeterminate {
    background-color: white;
  }

</style>
