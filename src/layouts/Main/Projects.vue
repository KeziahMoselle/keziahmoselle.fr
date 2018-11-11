<template>
  <div id="projects" class="col s12 m10 offset-m1 l8 offset-l2">

    <Tags @sort="sort"></Tags>

    <div class="center row">

      <Project
        v-if="!isSorted"
        v-for="project in Projects"
        :key="project.id"
        :title="project.title"
        :tech="project.tech"
        :modal-id="project.modalId">
      </Project>

      <Project
        v-if="isSorted"
        v-for="sorted in sortedProjects"
        :key="sorted.id"
        :title="sorted.title"
        :tech="sorted.tech"
        :modal-id="sorted.modalId">
      </Project>

    </div>
  </div>
</template>

<script>
import Project from './components/Project'
import Tags from './components/Tags'

import Projects from './Projects.js'

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
              if (sortedProject.title == project.title) {
                console.log(true)
                isDuplicata = true
              } else {
                console.log(false)
                isDuplicata = false
              }
            });
            if (!isDuplicata) {
              this.sortedProjects.push(project)
            }
          }
        })
      });
    }
  }
}
</script>

<style>

</style>
