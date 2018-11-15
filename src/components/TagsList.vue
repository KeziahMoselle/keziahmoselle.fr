<template>
  <div class="container-tags">
    <TagsListChip
      v-for="technology in technologies"
      :key="technology.id"
      :lang="technology"
      v-on:chipClicked="chipClicked">
    </TagsListChip>
  </div>
</template>

<script>
import TagsListChip from '@/components/TagsListChip'
import technologies from '@/technologies'

export default {
  name: 'TagsList',
  components: {
    TagsListChip
  },
  data () {
    return {
      technologies,
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
