<template>
  <div class="col s12 m6 l4 skills">
    <img class="tooltipped" data-position="left" :data-tooltip="lang" :src="link" :alt="lang">
    <div>
      <div class="chip">{{ experience }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tool',
  props: {
    lang: String,
    years: Number
  },
  computed: {
    link: function () {
      const parsedLink = this.lang.toLowerCase().replace(' ', '')
      return `./assets/icons/tech/${parsedLink}.svg`
    },
    experience: function () {
      if (this.years > 0) {
        if (this.years === 1) {
          return `${this.years} ${this.$parent.$t('skills.year')}`
        }
        return `${this.years} ${this.$parent.$t('skills.years')}`
      } else {
        return this.$parent.$t('skills.learning')
      }
    }
  }
}
</script>

<style>

</style>
