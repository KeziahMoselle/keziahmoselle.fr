document.addEventListener('DOMContentLoaded', () => {
  M.AutoInit()

  baffle('.baffle').set({ characters: '01' }).reveal(1000)
  
  ScrollReveal().reveal('img.tooltipped')
  ScrollReveal().reveal('.card-project')
})

let vm = new Vue({
  el: '#contact-form',
  data: {
    email: '',
    message: '',
    emailClass: '',
    messageClass: ''
  },
  methods: {
    submit: function () {
      if (this.isEmailValid && this.isMessageValid) {
        this.sendEmail()
      } else if (!this.isEmailValid && this.isMessageValid) {
        M.toast({ html: 'Your email is invalid.' })
      } else if (!this.isMessageValid && this.isEmailValid) {
        M.toast({ html: 'You must type a message.' })
      } else {
        M.toast({ html: 'Error, please fill the two fields.' })
      }
    },
    sendEmail: function () {
      // Send Email
      M.toast({ html: 'Your message has been sent !' })
    }
  },
  watch: {
    email: function () {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isEmailValid = this.isEmailValid = regex.test(this.email.toLowerCase())
      isEmailValid ? this.emailClass = 'valid' : this.emailClass = 'invalid'
    },
    message: function () {
      const isMessageValid = this.isMessageValid = this.message.length > 50
      isMessageValid ? this.messageClass = 'valid' : this.messageClass = 'invalid'
    }
  }
})