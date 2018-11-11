<template>
  <div class="container-tags">
    <Tag
      v-for="technology in technologies"
      :key="technology.id"
      :lang="technology"
      v-on:chipClicked="chipClicked">
    </Tag>
  </div>
</template>

<script>
import Tag from './Tag'

export default {
  name: 'Tags',
  components: {
    Tag
  },
  data () {
    return {
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'jQuery',
        'PHP',
        'MySQL',
        'NodeJS',
        'React',
        'Electron',
        'VueJS',
        'Bulma',
        'Bootstrap',
        'Materialize'
      ]
    }
  },
  methods: {
    chipClicked (technology, isActive) {
      console.log(technology + ' is ' + isActive)
    }
  }
}
</script>

<style scoped>

  .container-tags {
    text-align: center;
    margin: 16px 0 20px 0;
  }

</style>
