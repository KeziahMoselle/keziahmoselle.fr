const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})

if (window.location.href.split('#lang=')[1]) {
  i18n.locale = window.location.href.split('#lang=')[1] || 'fr'
}

const Skill = {
  template: `
    <div class="col s12 m6 l4 skills">
      <img class="tooltipped" data-position="left" :data-tooltip="lang" :src="link" :alt="lang">
      <div>
        <div class="chip">{{ experience }}</div>
      </div>
    </div>`,
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

const Tool = {
  template: `
    <div class="col s12 m6 l4 skills">
      <img class="tooltipped" data-position="left" :data-tooltip="lang" :src="link" :alt="lang">
      <div>
        <div class="chip">{{ experience }}</div>
      </div>
    </div>`,
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

const Project =  {
  template: `
    <div class="col s12 m6 l4">
      <div class="card card-project">
        <div class="card-image">
          <img :src="backgroundImg" :alt="title">
          <span class="card-title">{{ title }}</span>
          <a :href="modalId" class="modal-trigger btn-floating halfway-fab waves-effect waves-dark white"><i
              class="material-icons">more_vert</i></a>
        </div>
        <div class="project card-content">
            <span v-for="(tech, key) in technologies">
              <img :src="tech" alt="tech">
            </span>
        </div>
      </div>
    </div>`,
  props: {
    title: String,
    modalId: String,
    tech: Array
  },
  computed: {
    technologies: function () {
      let technologies = []
      for (i in this.tech) {
        const parsedLink = this.filter(this.tech[i])
        technologies.push(`./assets/icons/tech/${parsedLink}.svg`)
      }
      return technologies
    },
    backgroundImg: function () {
      const parsedTitle = this.filter(this.title)
      return `./assets/icons/project/${parsedTitle}.png`
    }
  },
  methods: {
    filter: function (string) {
      return string.toLowerCase().replace(' ', '').replace('.', '').replace('.fr', '')
    }
  }
}

let vm = new Vue({
  el: '#app',
  i18n,
  components: {
    Skill,
    Tool,
    Project
  },
  data: {
    email: '',
    message: '',
    emailClass: '',
    messageClass: ''
  },
  methods: {
    setFr: function () {
      this.$i18n.locale = 'fr'
      window.location.reload()
    },
    setEn: function () {
      this.$i18n.locale = 'en'
      window.location.reload()
    },
    scrollToContent: function () {
      const elementToScrollTo = document.querySelector('main')
      elementToScrollTo.scrollIntoView()
    },
    submit: function () {
      if (this.isEmailValid && this.isMessageValid) {
        this.sendEmail()
      } else if (!this.isEmailValid && this.isMessageValid) {
        M.toast({ html: messages.fr.contact.errorEmail })
      } else if (!this.isMessageValid && this.isEmailValid) {
        M.toast({ html: messages.fr.contact.errorMessage })
      } else {
        M.toast({ html: messages[i18n.locale].contact.error })
      }
    },
    sendEmail: function () {
      const payload = JSON.stringify({
        email: this.email,
        message: this.message
      })
      fetch('http://217.69.3.53/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload
      })
      .then(response => {
        if (response.status === 200) {
          M.toast({ html: messages[i18n.locale].contact.sent })
        } else {
          M.toast({ html: messages[i18n.locale].contact.serverError })
        }
      })
      .catch(() => M.toast({ html: messages[i18n.locale].contact.serverError }))
    }
  },
  watch: {
    email: function () {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isEmailValid = this.isEmailValid = regex.test(this.email.toLowerCase())
      isEmailValid ? this.emailClass = 'valid' : this.emailClass = 'invalid'
    },
    message: function () {
      const isMessageValid = this.isMessageValid = this.message.length > 10
      isMessageValid ? this.messageClass = 'valid' : this.messageClass = 'invalid'
    }
  }
})