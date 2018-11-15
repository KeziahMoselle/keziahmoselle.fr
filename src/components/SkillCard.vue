<template>
  <div class="col s6 l4 skills">
    <div class="skill-container">
      <img :src="link" :alt="lang">
      <h5>{{ lang }}</h5>
    </div>
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
        return `${this.$parent.$t('skills.learning')}...`
      }
    }
  }
}
</script>

<style scoped>

  .skill-container {
    position: relative;
  }

  h5 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 4px;
    font-weight: bold;
    text-shadow: 2px 2px 4px black;
    opacity: 1;
    transition: opacity 0.2s;
  }

  img {
    transition: transform 0.3s, filter 0.3s;
    filter: brightness(70%);
  }

  img:hover {
    transform: scale(1.2);
    filter: brightness(100%);
  }

  img:hover + h5 {
    z-index: -1;
    opacity: 0;
  }

  .skills {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 451px) {
    .skills img {
      height: 100px;
      width: 100px;
    }
  }

  @media only screen and (max-width: 450px) {
    .skills img {
      height: 64px;
      width: 64px;
    }
  }

  .chip {
    margin-top: 10px;
    font-size: 18px;
    padding: 0 16px;
  }

</style>
