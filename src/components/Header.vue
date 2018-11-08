<template>
  <header>
    <div class="translations">
			<a id="frenchBtn" @click="setFr" href="#lang=fr"><img src="" alt="Drapeau Français"></a>
			<a id="EnglishBtn" @click="setEn" href="#lang=en"><img src="" alt="English flag"></a>
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
export default {
  name: 'Header',
  methods: {
    setFr: function () {
      this.$i18n.locale = 'fr'
    },
    setEn: function () {
      this.$i18n.locale = 'en'
    }
  }
}
</script>

<style scoped>

</style>
