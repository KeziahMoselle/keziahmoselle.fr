<template>
  <router-link :to="{ name: 'readArticle', params: { id: id } }">
    <article :class="[ focus ? 'hover' : '' ]" class="card">
      <div @mouseover="toggleFocus" @mouseout="toggleFocus" class="card-content">
        <h4>Article n°{{ id }}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius accusamus deserunt dolorem, at totam sint quasi rerum eveniet iure culpa ullam est aspernatur neque eos, qui nostrum quam magnam!</p>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: 'BlogArticle',
  data () {
    return {
      focus: false
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
      this.displayBtn = !this.displayBtn
    toggleFocus () {
      this.focus = !this.focus
    }
  }
}
</script>

<style scoped>

  article {
    cursor: pointer;
    border-radius: 6px;
    transition: box-shadow 0.1s;
  }

  div.card-content {
    padding-top: 30px;
    padding-bottom: 25px;
  }

  h4 {
    position: absolute;
    top: -10px;
    left: -10px;
    font-size: 1.7rem;
    color: black;
    display: inline-block;
    background-color: white;
    padding: 5px;
  }

  p {
    max-height: 64px;
    text-overflow: ellipsis;
    padding: 10px 20px 0 20px;
    font-size: 18px;
    overflow: hidden;
    color: white;
  }

  .hover {
    box-shadow: 2px 2px 4px white;
  }

</style>
