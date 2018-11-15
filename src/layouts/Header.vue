<template>
  <header v-scroll="onScroll">
    <div id="navbar-container">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/" class="btn white black-text waves-effect">Home</router-link></li>
            <li><router-link to="/blog" class="btn white black-text waves-effect">Blog</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
		<div id="header-container">
      <div class="banner black">
        <h1 v-if="!showNavbar" class="hide-on-small-only baffle">KEZIAH MOSELLE</h1>
      </div>
      <img class="logo" src="@/assets/icons/logo.svg" alt="logo">
      <div class="banner dark">
        <h2 v-if="!showNavbar" class="hide-on-small-only baffle">{{ $t('header.subtitle') }}</h2>
      </div>
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
  data () {
    return {
      showNavbar: false
    }
  },
  mounted () {
    baffle('.baffle', {
      characters: '01'
    }).reveal(1000)
  },
  methods: {
    scrollToContent () {
      document.querySelector('main').scrollIntoView()
    },
    onScroll (event, el) {
      if (window.scrollY > 400 && !this.showNavbar) {
        console.log('triggered')
        this.slideUp()
      }
    },
    slideUp () {
      this.showNavbar = true
      document.querySelector('nav').style.display = 'block'
      setTimeout(() => {
        document.querySelector('nav').style.opacity = '1'
        document.querySelector('nav').style.height = '64px'
      }, 100);
    },
    slideDown () {
      this.showNavbar = false
      document.querySelector('nav').style.height = '0'
      document.querySelector('nav').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('nav').style.position = 'unset'
      }, 100);
    }
  }
}
</script>

<style scoped>

  nav {
    position: fixed;
    z-index: 3;
    height: 0;
    display: none;
    opacity: 0;
    transition: opacity 0.4s, height 0.4s;
  }

</style>
