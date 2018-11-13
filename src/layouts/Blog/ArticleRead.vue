<template>
  <main class="row">

    <div class="card-panel col s12 m10 offset-m1 l6 offset-l3">
      <router-link to="/blog" class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">keyboard_arrow_left</i></router-link>
      <h3>Title n°{{ id }}</h3>
    </div>
    
    <div class="card col s12 m10 offset-m1 l8 offset-l2">
      <div class="card-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam, aut, modi officia consequatur nulla rem perferendis minima nam explicabo itaque incidunt. Tempora mollitia fugit dolorem optio, dignissimos vitae expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus eveniet porro accusantium illum sed doloribus recusandae repellendus nisi maiores quos asperiores, deleniti vel, molestias, nulla distinctio iste minima? Ex?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit inventore maxime nemo perspiciatis blanditiis hic, sed maiores officia tempora numquam. Vero corporis, magnam earum laudantium maxime distinctio fugiat nesciunt nisi?
        </p>
      </div>
    </div>

  </main>
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
  methods: {
    goBack () {
      this.$router.push('/blog')
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

  div.card-content p {
    font-size: 1.5rem;
  }

</style>
