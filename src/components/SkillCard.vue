<template>
  <div class="col s6 l4 skills">
    <img class="tooltipped" data-position="left" :data-tooltip="lang" :src="link" :alt="lang">
    <div>
      <div class="chip">{{ experience }}</div>
    </div>
  </div>
</template>

<script>
import filter from '@/mixins/filter'

export default {
  name: 'SkillCard',
  data () {
    return {
      actualYear: new Date().getFullYear()
    }
  },
  props: {
    lang: {
      type: String,
      require: true
    },
    year: {
      type: String,
      required: true
    }
  },
  methods: {
    filter
  },
  computed: {
    link: function () {
      const parsedLink = this.filter(this.lang)
      return `./assets/icons/tech/${parsedLink}.svg`
    },
    experience: function () {
      const startDate = new Date(this.year).getFullYear()
      const years = this.actualYear - startDate
      if (years > 0) {
        if (years === 1) {
          return `${years} ${this.$parent.$t('skills.year')}`
        }
        return `${years} ${this.$parent.$t('skills.years')}`
      } else {
        return this.$parent.$t('skills.learning')
      }
    }
  }
}
</script>

<style scoped>

  .chip {
    margin-top: 10px;
    font-size: 18px;
    padding: 0 16px;
  }

  img {
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.2);
  }

</style>
