<template>
  <article class="card">
    <div class="card-content">
      <h4>Title</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogArticle'
}
</script>

<style scoped>

  article {
    cursor: pointer;
    border-radius: 6px;
  }

  article:hover {
    border: 1px solid white;
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

</style>
