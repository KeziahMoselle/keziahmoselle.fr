<template>
  <header>
    <Translation-button></Translation-button>
    <Navbar></Navbar>
		<div class="banner black">
			<h1 class="hide-on-small-only baffle">KEZIAH MOSELLE</h1>
		</div>
		<img class="logo" src="assets/icons/logo.svg" alt="logo">
		<div class="banner dark">
			<h2 class="hide-on-small-only baffle">{{ $t('header.subtitle') }}</h2>
		</div>
		<button @click="scrollToContent" class="btn-floating white pulse"><i class="material-icons">keyboard_arrow_down</i></button>
  </header>
</template>

<script>
import TranslationButton from '@/components/TranslationButton'
import Navbar from '@/layouts/Navbar'
import baffle from 'baffle'

export default {
  name: 'Header',
  components: {
    TranslationButton,
    Navbar
  },
  mounted () {
    baffle('.baffle', {
      characters: '01'
    }).reveal(1000)
  },
  methods: {
    scrollToContent () {
      document.querySelector('main').scrollIntoView()
    }
  }
}
</script>

<style scoped>

</style>
