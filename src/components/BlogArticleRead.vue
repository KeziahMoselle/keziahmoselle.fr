<template>
  <div>
    <h1>You're reading article n°{{ $route.params.id }}</h1>
    <button @click="goBack" class="btn">Go Back</button>
  </div>
</template>

<script>
export default {
  name: 'BlogArticleRead',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
