<template>
  <div id="projects" class="col s12 m10 offset-m1 l8 offset-l2">

    <Tags @sort="sort"></Tags>

    <div class="center row">

      <Project
        v-for="project in Projects"
        :key="project.id"
        :title="project.title"
        :tech="project.tech"
        :modal-id="project.modalId">
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
  methods: {
    sort (tags) {
      this.sortedProjects = []
      Projects.forEach(project => {
        // Compare Projects to tags
        // If Projects.tech [] have 1 similar key to tags [] -> Add it to sortedProjects
      });
    }
  }
}
</script>

<style>

</style>
