<template>
  <div>
    <h1>You're reading article n°{{ id }}</h1>
    <button @click="goBack" class="btn">Go Back</button>
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
  methods: {
    goBack () {
      this.$router.push('/blog')
    }
  }
}
</script>

<style>

</style>
