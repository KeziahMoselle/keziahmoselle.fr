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
        'React Native',
        'Electron',
        'VueJS',
        'Bulma',
        'Bootstrap',
        'Materialize'
      ],
      activeTechnologies: []
    }
  },
  methods: {
    chipClicked (technology, isActive) {
      if (isActive) {
        this.activeTechnologies.push(technology)
      } else {
        const index = this.activeTechnologies.indexOf(technology)
        if (index !== -1) {
          this.activeTechnologies.splice(index, 1)
        }
      }
    }
  },
  watch: {
    activeTechnologies () {
      this.$emit('sort', this.activeTechnologies)
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
