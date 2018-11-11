<template>
  <div id="projects" class="col s12 m10 offset-m1 l8 offset-l2">

    <Tags @sort="sort"></Tags>

    <div class="center row">
      <div v-if="!isSorted">
        <Project
          v-for="project in Projects"
          :key="project.id"
          :title="project.title"
          :tech="project.tech"
          :modal-id="project.modalId">
        </Project>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="isSorted">
          <Project
            v-for="sorted in sortedProjects"
            :key="sorted.id"
            :title="sorted.title"
            :tech="sorted.tech"
            :modal-id="sorted.modalId">
          </Project>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Project from './components/Project'
import Tags from './components/Tags'

import Projects from './listProjects.js'

export default {
  name: 'Projects',
  components: {
    Project,
    Tags
  },
  data () {
    return {
      Projects,
      sortedProjects: []
    }
  },
  computed: {
    isSorted () {
      return this.sortedProjects.length > 0 ? true : false
    }
  },
  methods: {
    sort (tags) {
      this.sortedProjects = []
      this.Projects.forEach(project => {
        tags.forEach(tag => {
          if (project.tech.includes(tag)) {
            let isDuplicata
            this.sortedProjects.forEach(sortedProject => {
              sortedProject.title === project.title ? isDuplicata = true : isDuplicata = false
            });
            if (!isDuplicata) {
              this.sortedProjects.push(project)
            }
          }
        })
      })
    }
  }
}
</script>

<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
