<template>
  <form class="col s12 m10 offset-m1 l8 offset-l2" id="contact-form">
    <div class="card">
      <div class="card-content block">
        <h3>{{ $t('contact.title') }}</h3>
        <div class="row">
          <div class="input-field col s12 m10 offset-m1 l6 offset-l3">
            <i class="material-icons prefix">email</i>
            <input v-model="email" type="text" id="email" v-bind:class="emailClass">
            <label for="email">{{ $t('contact.emailPlaceholder') }}</label>
            <span class="helper-text" data-error="Your email is not valid." data-success="✓"></span>
          </div>
          <div class="input-field col s12 m10 offset-m1 l6 offset-l3">
            <i class="material-icons prefix">textsms</i>
            <textarea v-model="message" class="materialize-textarea" id="content" v-bind:class="messageClass"></textarea>
            <label for="content">{{ $t('contact.messagePlaceholder') }}</label>
            <span class="helper-text" data-error="The message should contains at least 10 characters." data-success="✓"></span>
          </div>
          <div class="col s12 center">
            <button @click.prevent="submit" class="btn dark waves-effect waves-dark" type="submit">{{ $t('contact.send') }}</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Contact-form',
  data() {
    return {
      email: '',
      message: '',
      emailClass: '',
      messageClass: ''
    }
  },
  methods: {
    submit: function () {
      const messages = this.$i18n.messages
      const locale = this.$i18n.locale
      if (this.isEmailValid && this.isMessageValid) {
        this.sendEmail()
      } else if (!this.isEmailValid && this.isMessageValid) {
        M.toast({ html: messages[locale].contact.errorEmail })
      } else if (!this.isMessageValid && this.isEmailValid) {
        M.toast({ html: messages[locale].contact.errorMessage })
      } else {
        M.toast({ html: messages[locale].contact.error })
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
}
</script>

<style>

</style>
