<template>
  <div class="navbar">
    <router-link to="/" class="btn white waves-effect">Home</router-link>
    <router-link to="/blog" class="btn white waves-effect">Blog</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .navbar {
    position: absolute;
    top: 10px;
    right: 5px;
  }

  .navbar a {
    color: black;
    margin: 0 5px;
  }

</style>
