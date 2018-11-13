<template>
  <div class="col s12 m6 l4">
    <div class="card card-project">
      <div class="card-image">
        <img :src="backgroundImg" :alt="title">
        <span class="card-title">{{ title }}</span>
        <a v-if="modalId" :href="modalId" class="modal-trigger btn-floating halfway-fab waves-effect waves-dark white"><i
            class="material-icons">more_vert</i></a>
      </div>
      <div class="project card-content">
        <span v-for="tech in technologies" :key="tech">
          <img :src="tech" alt="tech">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import filter from '@/utils/filter'

export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    tech: {
      type: Array,
      required: true
    },
    modalId: String
  },
  computed: {
    technologies: function () {
      let technologies = []
      for (let i in this.tech) {
        const parsedLink = filter(this.tech[i])
        technologies.push(`./assets/icons/tech/${parsedLink}.svg`)
      }
      return technologies
    },
    backgroundImg: function () {
      const parsedTitle = filter(this.title)
      return `./assets/icons/project/${parsedTitle}.png`
    }
  }
}
</script>

<style>

</style>
