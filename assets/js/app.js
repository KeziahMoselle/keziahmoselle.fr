const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})

if (window.location.href.split('#lang=')[1]) {
  console.log('lang present')
  i18n.locale = window.location.href.split('#lang=')[1] || 'fr'
}


let vm = new Vue({
  el: '#app',
  i18n,
  data: {
    email: '',
    message: '',
    emailClass: '',
    messageClass: ''
  },
  methods: {
    setFr: function () {
      this.$i18n.locale = 'fr'
    },
    setEn: function () {
      this.$i18n.locale = 'en'
    },
    submit: function () {
      if (this.isEmailValid && this.isMessageValid) {
        this.sendEmail()
      } else if (!this.isEmailValid && this.isMessageValid) {
        M.toast({ html: 'Your email is invalid.' })
      } else if (!this.isMessageValid && this.isEmailValid) {
        M.toast({ html: 'You must type a message.' })
      } else {
        M.toast({ html: 'Please fill the two fields.' })
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
          M.toast({ html: 'Your message has been sent !' })
        } else {
          M.toast({ html: 'There was an error, please try again later.' })
        }
      })
      .catch(() => M.toast({ html: 'There was an error, please try again later.' }))
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