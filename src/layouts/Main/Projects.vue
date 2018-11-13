<template>
  <div id="projects" class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="card">
      <div class="card-content">

        <h3>{{ $t('portfolio.title') }}</h3>

        <TagsList @sort="sort"></TagsList>

        <h4 v-if="isSorted">{{ sortedProjects.length }} {{ $t('portfolio.found') }}</h4>

        <div class="center row">
          <div v-if="!isSorted">
            <Project-card
              v-for="project in myProjects"
              :key="project.id"
              :title="project.title"
              :tech="project.tech"
              :modal-id="project.modalId">
            </Project-card>
          </div>

          <transition name="fade" mode="out-in">
            <div v-if="isSorted">
              <Project-card
                v-for="sorted in sortedProjects"
                :key="sorted.id"
                :title="sorted.title"
                :tech="sorted.tech"
                :modal-id="sorted.modalId">
              </Project-card>
            </div>
          </transition>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import TagsList from '@/components/TagsList'

import myProjects from '@/myProjects.js'

export default {
  name: 'Projects',
  components: {
    ProjectCard,
    TagsList
  },
  data () {
    return {
      myProjects,
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
      this.myProjects.forEach(project => {
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

  h4 {
    text-align: center;
  }

</style>
