<template>
  <article class="card">
    <div @mouseover="toggleBtn" @mouseout="toggleBtn" class="card-content">
      <h4>Title</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
      <a :class="[ displayBtn ? 'scale-in' : 'scale-out' ]" class="btn-floating btn-large scale-transition">
        <i class="material-icons">keyboard_arrow_right</i>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogArticle',
  data () {
    return {
      displayBtn: false
    }
  },
  methods: {
    toggleBtn () {
      this.displayBtn = !this.displayBtn
    }
  }
}
</script>

<style scoped>

  article {
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.4s;
  }

  article:hover .card {
    background-color: white !important;
  }

  div.card-content {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  h4 {
    font-size: 1.7rem;
    color: black;
    display: inline-block;
    background-color: white;
    padding: 5px;
  }

  p {
    padding: 10px 20px 0 20px;
    font-size: 18px;
    overflow: hidden;
  }

  .scale-transition {
    position: absolute;
    right: -28px;
    top: 35px;
  }

</style>
