<template>
  <div class="translations">
    <a class='dropdown-trigger btn' href='#' data-target='dropdown-translations'>{{ $t('header.language') }}</a>
    <ul id='dropdown-translations' class='dropdown-content'>
      <li><a @click="setFr" href="#lang=fr">Français</a></li>
      <li class="divider" tabindex="-1"></li>
      <li><a @click="setEn" href="#lang=en">English</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TranslationButton',
  mounted () {
    window.M.Dropdown.init(document.querySelector('.dropdown-trigger'))
  },
  methods: {
    setFr () {
      this.$i18n.locale = 'fr'
      document.querySelector('h2').innerText = this.$i18n.messages.fr.header.subtitle
    },
    setEn () {
      this.$i18n.locale = 'en'
      document.querySelector('h2').innerText = this.$i18n.messages.en.header.subtitle
    }
  }
}
</script>

<style>

  .translations {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    margin: 0;
  }

  .dropdown-content li > a,
  .dropdown-content li > span {
    user-select: none;
}

</style>
