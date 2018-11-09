<template>
  <div class="col s12 m6 l4">
    <div class="card card-project">
      <div class="card-image">
        <img :src="backgroundImg" :alt="title">
        <span class="card-title">{{ title }}</span>
        <a :href="modalId" class="modal-trigger btn-floating halfway-fab waves-effect waves-dark white"><i
            class="material-icons">more_vert</i></a>
      </div>
      <div class="project card-content">
        <span v-for="(tech, key) in technologies">
          <img :src="tech" alt="tech">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: String,
    modalId: String,
    tech: Array
  },
  computed: {
    technologies: function () {
      let technologies = []
      for (let i in this.tech) {
        const parsedLink = this.filter(this.tech[i])
        technologies.push(`./assets/icons/tech/${parsedLink}.svg`)
      }
      return technologies
    },
    backgroundImg: function () {
      const parsedTitle = this.filter(this.title)
      return `./assets/icons/project/${parsedTitle}.png`
    }
  },
  methods: {
    filter: function (string) {
      return string.toLowerCase().replace(' ', '').replace('.', '').replace('.fr', '')
    }
  }
}
</script>

<style>

</style>
