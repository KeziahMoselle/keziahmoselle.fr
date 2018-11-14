<template>
  <div class="row">

    <div class="card-panel col s12 m10 offset-m1 l6 offset-l3">
      <router-link to="/blog" class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">keyboard_arrow_left</i></router-link>
      <h3>Title n°{{ id }}</h3>
    </div>
    
    <div class="card col s12 m10 offset-m1 l8 offset-l2">
      <div class="card-content">
        <h4>Subtitle</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis sit quaerat voluptatum, id, autem porro ratione doloribus quia eum error architecto culpa repellendus, cum aut laudantium quo ea voluptas.</p>
        <h4>Subtitle</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque hic, sequi aliquam aperiam provident libero perspiciatis labore alias nihil vitae veniam incidunt nostrum, ipsa dolor maiores odio odit aspernatur eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere in consequuntur tempora, autem, temporibus hic perferendis deserunt quam eaque libero similique exercitationem, ipsum illo vel quaerat id molestias nam.</p>
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
