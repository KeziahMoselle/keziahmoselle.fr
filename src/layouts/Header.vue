<template>
  <header>
    <div class="translations">
			<a id="frenchBtn" @click="setFr" href="#lang=fr"><img src="assets/icons/flag/fr.png" alt="Drapeau Français"></a>
			<a id="EnglishBtn" @click="setEn" href="#lang=en"><img src="assets/icons/flag/en.png" alt="English flag"></a>
		</div>
		<div class="banner black">
			<h1 class="hide-on-small-only baffle">KEZIAH MOSELLE</h1>
		</div>
		<img class="logo" src="assets/icons/logo.svg" alt="logo">
		<div class="banner dark">
			<h2 class="hide-on-small-only baffle">{{ $t('header.subtitle') }}</h2>
		</div>
		<button @click="scrollToContent" class="btn-floating waves-effect waves-dark white pulse"><i class="material-icons">keyboard_arrow_down</i></button>
  </header>
</template>

<script>
import baffle from 'baffle'

export default {
  name: 'Header',
  mounted () {
    baffle('.baffle', {
      characters: '01'
    }).reveal(1000)
  },
  methods: {
    setFr () {
      this.$i18n.locale = 'fr'
      document.querySelector('h2').innerText = 'DÉVELOPPEUR WEB'
    },
    setEn () {
      this.$i18n.locale = 'en'
      document.querySelector('h2').innerText = 'WEB ENTHUSIAST'
    },
    scrollToContent () {
      const elementToScrollTo = document.querySelector('main')
      elementToScrollTo.scrollIntoView()
    }
  }
}
</script>

<style scoped>

  .translations {
    top: 10px;
    left: 10px;
  }

</style>
