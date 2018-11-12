<template>
  <div @click="chipClicked" class="chip" :class="{ active: isActive }">
    <img :src="link" alt="aze">{{ lang }}
    <i v-if="isActive" class="material-icons">close</i>
  </div>
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
  computed: {
    link () {
      const parsedLink = this.lang.toLowerCase().replace(' ', '')
      return `./assets/icons/tech/${parsedLink}.svg`
    },
  },
  methods: {
    chipClicked () {
      this.isActive = !this.isActive
      this.$emit('chipClicked', this.lang, this.isActive)
    }
  }
}
</script>

<style scoped>

  .chip {
    font-size: 18px;
    padding: 0 16px;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.4s, color 0.4s;
  }

  .chip > img {
    padding: 5px;
    border-radius: 0;
  }

  .chip i.material-icons {
    cursor: pointer;
    float: right;
    font-size: 16px;
    line-height: 32px;
    padding-left: 8px;
  }

  .chip:hover {
    background-color: white;
    color: black;
  }

  .active {
    background-color: #ED145B !important;
    color: white !important;
  }

</style>
