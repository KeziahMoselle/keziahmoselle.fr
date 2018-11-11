<template>
  <div @click="chipClicked" class="chip" :class="{ active: isActive }">{{ lang }}</div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    lang: String
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    chipClicked () {
      this.isActive === true ? this.isActive = false : this.isActive = true
      this.$emit('chipClicked', this.lang, this.isActive)
    }
  }
}
</script>

<style scoped>

  .chip {
    user-select: none;
    cursor: pointer;
    transition: background-color, color 0.4s;
  }

  .chip:hover {
    background-color: #ED145B;
    color: white;
  }

  .active {
    background-color: #ED145B;
    color: white;
  }

</style>
